import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Users, Target, Award, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import aboutTeam from "@/assets/about-team.jpg";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";
const EMAIL = "support@internetnetwork.com";
const ADDRESS = "Des Moines, IA";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize your needs and work tirelessly to find the best solutions for your connectivity requirements.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Target,
    title: "Expert Guidance",
    description: "Our knowledgeable team stays up-to-date with the latest offerings to provide informed recommendations.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Award,
    title: "Quality Service",
    description: "We partner only with trusted providers to ensure you receive reliable, high-quality internet and TV service.",
    gradient: "from-secondary to-primary",
  },
];

const stats = [
  { number: "10K+", label: "Happy Customers", icon: Heart },
  { number: "50+", label: "Provider Partners", icon: Zap },
  { number: "24/7", label: "Support Available", icon: Phone },
  { number: "99%", label: "Satisfaction Rate", icon: Award },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Internet Network</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Your trusted partner for finding the perfect internet and TV solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 relative z-10">
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 shadow-xl border text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={aboutTeam} 
                  alt="Our team" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-2xl -z-10" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Internet Network is an <strong className="text-foreground">independent marketing partner</strong> dedicated to helping 
                households and businesses find the best internet and television services available in their area.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We understand that choosing the right internet and TV provider can be overwhelming with so many 
                options available. That's why we've made it our mission to simplify the process by providing 
                personalized recommendations based on your unique needs and budget.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of experts stays current with the latest plans, promotions, and technologies from 
                top providers across the nation. When you call us, you're not just getting a sales pitch – 
                you're getting honest advice from people who genuinely want to help you stay connected.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Our Values
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="bg-card border-0 shadow-xl h-full card-hover">
                  <CardContent className="pt-8 text-center">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-muted/50 to-muted border-0 shadow-xl overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Important Information
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Internet Network operates as an independent marketing partner. We are not directly affiliated 
                  with any specific internet or television service provider. Our role is to help connect you 
                  with providers that best match your needs. All services are provided directly by the 
                  respective service providers, and their terms and conditions apply.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Get In Touch
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Phone, label: "Phone", value: PHONE_NUMBER, href: PHONE_LINK },
              { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
              { icon: MapPin, label: "Location", value: ADDRESS, href: null },
            ].map((item) => (
              <motion.div key={item.label} variants={itemVariants}>
                <Card className="bg-card border-0 shadow-lg card-hover">
                  <CardContent className="pt-6 text-center">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-semibold mb-2">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-primary hover:underline font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 hero-gradient text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Plan?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Our experts are standing by to help you get connected.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg">
                <a href={PHONE_LINK}>
                  <Phone className="h-5 w-5" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
