import { Layout } from "@/components/layout/Layout";
import { Phone, MessageSquare, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const PHONE_NUMBER = "1(515)-305-4012";
const PHONE_LINK = "tel:+15153054012";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Give Us a Call",
    description: "Contact our friendly team at (515) 305-4012. We're available to help you find the best internet and TV solutions for your home or business.",
    details: [
      "No obligation consultation",
      "Speak with real experts",
      "Get personalized recommendations",
    ],
    color: "from-primary to-accent",
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Share Your Needs",
    description: "Tell us about your usage habits, household size, and budget. We'll use this information to match you with the perfect plan.",
    details: [
      "How many people use the internet?",
      "What do you mainly use it for?",
      "Do you need TV service too?",
    ],
    color: "from-accent to-secondary",
  },
  {
    icon: Calendar,
    step: "3",
    title: "Schedule Installation",
    description: "Once you've chosen your plan, we'll coordinate with the provider to schedule installation at a time that works for you.",
    details: [
      "Flexible scheduling options",
      "Professional installation",
      "Same-week appointments often available",
    ],
    color: "from-secondary to-primary",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Get Connected & Enjoy",
    description: "After installation, you're ready to enjoy fast, reliable internet and entertainment. Our support team is always here if you need help.",
    details: [
      "Start streaming immediately",
      "24/7 customer support",
      "Satisfaction guaranteed",
    ],
    color: "from-primary to-secondary",
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
              Getting connected with Internet Network is simple. Follow these four easy steps to enjoy fast, reliable service.
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
                        <CardContent className="pt-6">
                          <ul className="space-y-4">
                            {step.details.map((detail, i) => (
                              <motion.li 
                                key={detail} 
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                              >
                                <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                                  <ArrowRight className="h-4 w-4 text-white" />
                                </div>
                                <span className="text-foreground font-medium">{detail}</span>
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
              Call us now and take the first step toward better internet and TV service.
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

export default HowItWorks;
