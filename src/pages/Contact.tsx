import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";
const EMAIL = "support@internetnetwork.com";
const ADDRESS = "Des Moines, IA";

const Contact = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-contact", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Message Sent! ✨",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-base md:text-xl text-primary-foreground/90 px-2">
              Have questions? We're here to help. Reach out and let's get you connected.
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
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Service Address</Label>
                        <Input
                          id="address"
                          name="address"
                          placeholder="123 Main St, City, State"
                          value={formData.address}
                          onChange={handleChange}
                          className="h-11 md:h-12 text-sm md:text-base"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your internet and TV needs..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="resize-none"
                      />
                    </div>
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
                          Send Message
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
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-lg">
                  The fastest way to get help is to give us a call. Our friendly team is standing by 
                  to answer your questions and help you find the perfect plan.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Call Us",
                    value: PHONE_NUMBER,
                    href: PHONE_LINK,
                    sub: "Available Monday - Friday, 8am - 8pm",
                    gradient: "from-primary to-accent",
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: EMAIL,
                    href: `mailto:${EMAIL}`,
                    sub: "We typically respond within 24 hours",
                    gradient: "from-accent to-secondary",
                  },
                  {
                    icon: MapPin,
                    title: "Our Location",
                    value: ADDRESS,
                    href: null,
                    sub: "Serving customers nationwide",
                    gradient: "from-secondary to-primary",
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
                              <p className="text-lg md:text-xl font-bold">{item.value}</p>
                            )}
                            <p className="text-xs md:text-sm text-muted-foreground mt-1">
                              {item.sub}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Quick Call CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
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
