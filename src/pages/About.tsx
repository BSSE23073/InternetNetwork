import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "(888) 353-6923";
const PHONE_LINK = "tel:+18883536923";
const EMAIL = "Support@internetnetwork.us";
const ADDRESS = "3708 Merle Hay Rd Des Moines, IA 50310";
const WEBSITE = "Internetnetwork.us";

const whatWeDo = [
  "High-speed internet for remote work",
  "Entertainment packages for the family",
  "Bundled solutions offering the best value",
];

const whyWorkWithUs = [
  {
    title: "Simplified Process",
    description: "We make it easy to discover and compare services from multiple providers.",
  },
  {
    title: "Provider Coordination",
    description: "We work directly with participating providers to ensure a smooth order and installation process.",
  },
  {
    title: "Customer Support",
    description: "Our support team is ready to assist you at every step during service selection and ordering.",
  },
];

const disclosures = [
  "Product names, logos, and trademarks listed on our site are owned by their respective entities; their inclusion does not imply endorsement.",
  "Internet Network charges a separate service and setup fee for coordinating new orders, in addition to any fees from the service provider.",
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Learn More About Internet Network</h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Your trusted partner for finding home internet and TV services across the United States.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Internet Network operates as an independent marketing partner under internetnetwork.us. We are not affiliated with, endorsed by, or the official site of any internet or cable provider.
                </p>
                <p>
                  We help customers discover home internet and TV service options from a variety of participating providers across the U.S. Our mission is to simplify the search process and connect you with the providers that best meet your needs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-muted/50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Business Information</h3>
                  <p className="text-muted-foreground">Website: {WEBSITE}</p>
                  <p className="text-muted-foreground">Business Address: {ADDRESS}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to make it easier for customers to find and compare home internet and TV options, enabling them to make well-informed decisions about services in their area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We guide customers through exploring service options and collaborate with participating providers to streamline ordering and installation. Our goal is to connect you with the right service, whether it's:
              </p>
              <ul className="space-y-3">
                {whatWeDo.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Disclosure */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-primary/20">
                <CardHeader>
                  <CardTitle>Important Disclosure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Internet Network operates independently as a marketing partner and is not connected to, endorsed by, or the official website of any particular provider.
                  </p>
                  <ul className="space-y-2">
                    {disclosures.map((disclosure) => (
                      <li key={disclosure} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {disclosure}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are committed to making your search for internet and TV services as smooth and effortless as possible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyWorkWithUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Connected */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Get Connected Today</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start discovering the internet and TV services available in your area now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/contact?source=availability">
                  Check Availability
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Plan?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Our experts are standing by to help you get connected.
            </p>
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;