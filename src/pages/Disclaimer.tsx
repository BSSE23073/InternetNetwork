import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const disclaimerContent = [
  {
    id: "notice",
    title: "1. Important Notice",
    content: `Please read this Disclaimer carefully before using Internet Network. By accessing or using this Website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer. If you do not agree, please discontinue use of the Website.`
  },
  {
    id: "partner",
    title: "2. Independent Marketing Partner",
    content: `Internet Network is owned and operated by Internetnetwork.us, an independent service guidance and coordination platform. We are not the official website, owner, or service provider of any internet, cable, or telecommunications company.`
  },
  {
    id: "pricing",
    title: "3. Pricing Disclaimer",
    content: `Any prices, estimates, or service plan information displayed on the Website are for general guidance only. Actual prices, availability, and terms are determined solely by the third-party service providers. Internet Network charges separate service and coordination fees for our facilitation services.`
  },
  {
    id: "advice",
    title: "4. No Professional Advice",
    content: `All information provided on the Website is for general informational purposes only. It should not be considered professional, technical, or legal advice. Customers are encouraged to verify all service details directly with the applicable service provider.`
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
            <p className="text-sm text-primary-foreground/60 mt-4">Effective Date: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {disclaimerContent.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center text-sm text-muted-foreground"
          >
            <p>Thank you for taking the time to understand our role and limitations.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclaimer;
