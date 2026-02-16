import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Send, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import emailjs from "@emailjs/browser";

const PHONE_NUMBER = "(888) 353-6923";
const PHONE_LINK = "tel:+18883536923";
const EMAIL = "Support@internetnetwork.us";
const ADDRESS = "3708 Merle Hay Rd Des Moines, IA 50310";

const serviceOptions = [
  "Internet Only",
  "TV Only",
  "Internet + TV Bundle",
  "Not Sure Yet",
];

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    message: "",
  });

  useEffect(() => {
    if (searchParams.get("source") === "availability") {
      setFormData((prev) => ({
        ...prev,
        message: "I would like to check service availability at my address.",
      }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, serviceInterest: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullAddress = [formData.address, formData.city, formData.state, formData.zipCode]
      .filter(Boolean)
      .join(", ");

    try {
      // Debug: log EmailJS config
      console.log("EmailJS Config:", {
        serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "SET" : "MISSING"
      });

      // Send email via EmailJS (client-side)
      const emailPromise = emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email, // Also needed for Reply-To field
          phone: formData.phone,
          service_interest: formData.serviceInterest || "Not specified",
          address: fullAddress || "Not provided",
          message: formData.message || "No additional message",
          title: formData.serviceInterest || "General Inquiry", // For subject line
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Save to database via edge function (parallel)
      const dbPromise = supabase.functions.invoke("submit-contact", {
        body: formData,
      });

      // Wait for both operations
      const [emailResult, dbResult] = await Promise.allSettled([emailPromise, dbPromise]);

      // Check results
      const emailSuccess = emailResult.status === "fulfilled";
      const dbSuccess = dbResult.status === "fulfilled" && !dbResult.value.error;

      if (emailSuccess || dbSuccess) {
        toast({
          title: "Message Sent! ✨",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", serviceInterest: "", address: "", city: "", state: "", zipCode: "", message: "" });
      } else {
        throw new Error("Both email and database operations failed");
      }

      // Log any partial failures for debugging
      if (!emailSuccess) console.error("EmailJS failed:", emailResult);
      if (!dbSuccess) console.error("Database save failed:", dbResult);
      if (emailSuccess) console.log("EmailJS succeeded:", emailResult);
      if (dbSuccess) console.log("Database save succeeded:", dbResult);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an issue sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-12 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-40 md:w-80 h-40 md:h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-40 md:w-80 h-40 md:h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
            <p className="text-base md:text-xl text-primary-foreground/90 px-2">
              Interested in exploring internet and TV services in your area? Complete the form below or reach out to us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl">Check Availability</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll help you find the best services in your area.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="serviceInterest">Service Interested In *</Label>
                      <Select value={formData.serviceInterest} onValueChange={handleSelectChange} required>
                        <SelectTrigger className="h-11 md:h-12">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceOptions.map((option) => (
                            <SelectItem key={option} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Service Address *</Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="123 Main St"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="h-11 md:h-12 text-sm md:text-base"
                      />
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          name="city"
                          placeholder="Des Moines"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          name="state"
                          placeholder="IA"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2 col-span-2 sm:col-span-1">
                        <Label htmlFor="zipCode">ZIP Code *</Label>
                        <Input
                          id="zipCode"
                          name="zipCode"
                          placeholder="50310"
                          value={formData.zipCode}
                          onChange={handleChange}
                          required
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Information</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your internet and TV needs..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to be contacted by Internet Network regarding available internet and TV services in your area. Your information will be handled according to our Privacy Policy.
                    </p>
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Submit Your Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-lg">
                  The fastest way to get help is to give us a call. Our friendly team is standing by 
                  to answer your questions and help you find the perfect plan.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: MapPin,
                    title: "Our Address",
                    value: "Internet Network",
                    sub: ADDRESS,
                    href: null,
                    gradient: "from-primary to-accent",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "(515) 305-4012",
                    href: PHONE_LINK,
                    sub: null,
                    gradient: "from-accent to-secondary",
                  },
                  {
                    icon: Clock,
                    title: "Hours",
                    value: "Monday – Friday: 8:00 AM – 8:00 PM EST",
                    sub: "Saturday: 9:00 AM – 5:00 PM EST",
                    href: null,
                    gradient: "from-secondary to-primary",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    value: EMAIL,
                    href: `mailto:${EMAIL}`,
                    sub: "We typically respond within 24 hours.",
                    gradient: "from-primary to-secondary",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-0 shadow-lg card-hover overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4 p-6">
                          <motion.div 
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`h-12 w-12 md:h-14 md:w-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
                          >
                            <item.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
                          </motion.div>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-semibold text-base md:text-lg mb-1">{item.title}</h3>
                            {item.href ? (
                              <a href={item.href} className="text-lg md:text-xl font-bold text-gradient hover:opacity-80 transition-opacity break-all">
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-base md:text-lg font-medium">{item.value}</p>
                            )}
                            {item.sub && (
                              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                                {item.sub}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours Note */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-muted/50 border"
              >
                <h3 className="font-bold text-base md:text-lg mb-2">Business Hours</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  7 Days a Week – Quick setup and fast response
                </p>
                <p className="text-xs text-muted-foreground italic">
                  Note: For technical support or billing questions regarding your active service, please contact your service provider directly.
                </p>
              </motion.div>

              {/* Quick Call CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <h3 className="font-bold text-base md:text-lg mb-2">Need Help Right Away?</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Skip the form and speak directly with our team.
                </p>
                <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 w-full sm:w-auto">
                  <a href={PHONE_LINK}>
                    <Phone className="h-5 w-5" />
                    <span className="truncate">Call {PHONE_NUMBER}</span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;