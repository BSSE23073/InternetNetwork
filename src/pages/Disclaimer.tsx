import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertTriangle, Building2, MapPin, DollarSign, ShieldX, Users, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "1(515)-305-4012";
const EMAIL = "support@internetnetwork.com";

const disclaimerContent = [
  {
    id: "partner",
    icon: Building2,
    title: "Independent Marketing Partner",
    content: "Internet Network operates as an independent marketing partner. We are not directly affiliated with, employed by, or agents of any specific internet, cable, or television service provider. Our role is to help connect consumers with suitable providers."
  },
  {
    id: "availability",
    icon: MapPin,
    title: "Service Availability",
    content: "Service availability, pricing, and features vary by location and are subject to change without notice. The information provided on this website is for general informational purposes only and may not reflect current offerings in your specific area."
  },
  {
    id: "pricing",
    icon: DollarSign,
    title: "Pricing Information",
    content: "Prices shown are approximate and may vary based on geographic location, current promotions and offers, equipment selections, and additional fees, taxes, and surcharges. Contact us for accurate pricing information for your specific address."
  },
  {
    id: "guarantee",
    icon: ShieldX,
    title: "No Guarantee",
    content: "While we strive to provide accurate information, we make no guarantees regarding service availability at your location, specific speeds, channels, or features, promotional pricing or offers, or installation timeframes."
  },
  {
    id: "third-party",
    icon: Users,
    title: "Third-Party Responsibility",
    content: "All services are provided directly by third-party service providers. Internet Network is not responsible for the quality, performance, or reliability of these services. Any service-related issues should be directed to the respective provider."
  },
  {
    id: "contact",
    icon: Phone,
    title: "Contact",
    content: `For questions about this disclaimer, contact us at ${PHONE_NUMBER} or ${EMAIL}. We're happy to clarify any points or address your concerns.`
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Disclaimer = () => {
  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mb-6">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Disclaimer</h1>
            <p className="text-lg text-primary-foreground/80">
              Important information about our services and limitations
            </p>
            <p className="text-sm text-primary-foreground/60 mt-4">Last updated: January 2025</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {disclaimerContent.map((item, index) => (
                    <motion.div key={item.id} variants={itemVariants}>
                      <AccordionItem value={item.id} className="border-b last:border-0">
                        <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4 text-left">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <span className="font-semibold text-base">
                              {index + 1}. {item.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-5">
                          <div className="pl-14 text-muted-foreground leading-relaxed">
                            {item.content}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center text-sm text-muted-foreground"
          >
            <p>Thank you for taking the time to understand our role and limitations.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
