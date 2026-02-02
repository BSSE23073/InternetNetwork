import { Layout } from "@/components/layout/Layout";
import { Phone, MapPin, Eye, FileText, Calendar, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "(515) 305-4012";
const PHONE_LINK = "tel:+15153054012";

const steps = [
  {
    icon: MapPin,
    step: "1",
    title: "Enter Your Address",
    description: "Provide your location to see which providers can serve your area. This helps us identify the best options for you.",
    instructions: [
      "Input your full street address",
      "Include apartment or unit number if applicable",
      "Verify your service location information",
    ],
    color: "from-primary to-accent",
  },
  {
    icon: Eye,
    step: "2",
    title: "View Available Providers",
    description: "We'll show all providers available at your address, along with their plans and pricing.",
    instructions: [
      "See which providers cover your area",
      "Explore available plan options",
      "Compare features and prices",
    ],
    color: "from-accent to-secondary",
  },
  {
    icon: FileText,
    step: "3",
    title: "Choose Your Plan",
    description: "Select the plan that best meets your needs. Options may include internet-only, TV-only, or bundled packages depending on availability.",
    instructions: [
      "Review different service tiers",
      "Evaluate plan features and costs",
      "Pick your ideal package",
    ],
    color: "from-secondary to-primary",
  },
  {
    icon: Calendar,
    step: "4",
    title: "Schedule Installation",
    description: "Once you've chosen a plan, we coordinate with the provider to schedule installation at a convenient time.",
    instructions: [
      "Select an installation date that works for you",
      "Receive confirmation details",
      "Prepare for service activation",
    ],
    color: "from-primary to-secondary",
  },
];

const expectations = [
  {
    icon: MapPin,
    title: "Service Availability",
    description: "We'll display which services are available at your location, as coverage may vary by provider.",
  },
  {
    icon: Clock,
    title: "Installation Process",
    description: "Most providers offer professional installation. Timing and fees depend on the provider and chosen plan.",
  },
  {
    icon: DollarSign,
    title: "Pricing Confirmation",
    description: "Final pricing is confirmed by the provider when placing your order and may vary based on current promotions.",
  },
  {
    icon: Users,
    title: "Our Role",
    description: "Internet Network helps you explore service options and connects you with providers. We act as an independent third-party service coordination partner.",
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">How It Works</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Getting started with Internet Network is simple! Follow these four easy steps to find and order internet and TV services in your area.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <motion.div 
                      className="flex items-start gap-5"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative flex-shrink-0">
                        <motion.div 
                          className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                          whileHover={{ scale: 1.05, rotate: 5 }}
                        >
                          <step.icon className="h-10 w-10 text-white" />
                        </motion.div>
                        <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-sm shadow-md">
                          {step.step}
                        </div>
                      </div>
                      <div className="pt-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h2>
                        <p className="text-muted-foreground text-lg">{step.description}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <Card className="border-0 shadow-lg bg-gradient-to-br from-muted/50 to-muted">
                        <CardHeader>
                          <CardTitle className="text-lg">Instructions:</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-4">
                            {step.instructions.map((instruction, i) => (
                              <motion.li 
                                key={instruction} 
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                                  <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-foreground font-medium">{instruction}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute left-10 top-full h-16 w-0.5 bg-gradient-to-b from-border to-transparent"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What to Expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expectations.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Enter your location to see exact pricing and plans available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg">
                  <Link to="/contact?source=availability">Check Availability Now</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-2 bg-white/10 border border-white text-white hover:bg-white/20">
                  <a href={PHONE_LINK}>
                    <Phone className="h-5 w-5 text-white" />
                    <span className="text-white">Call {PHONE_NUMBER}</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;