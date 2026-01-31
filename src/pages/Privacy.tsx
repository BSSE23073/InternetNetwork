import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, Database, Share2, Lock, UserCheck, Cookie, Phone, Eye } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "1(515)-305-4012";
const EMAIL = "support@internetnetwork.com";

const privacyContent = [
  {
    id: "collect",
    icon: Database,
    title: "Information We Collect",
    content: "We collect information you provide directly, including name and contact information, phone number and email address, service address, and service preferences and requirements. This information helps us serve you better."
  },
  {
    id: "use",
    icon: Eye,
    title: "How We Use Your Information",
    content: "We use your information to help you find suitable internet and TV services, connect you with service providers, respond to your inquiries promptly, and continuously improve our services for all customers."
  },
  {
    id: "sharing",
    icon: Share2,
    title: "Information Sharing",
    content: "We may share your information with internet and TV service providers to fulfill your service requests, and with service partners who assist in our operations. We do not sell your personal information to third parties under any circumstances."
  },
  {
    id: "security",
    icon: Lock,
    title: "Data Security",
    content: "We implement appropriate security measures to protect your personal information, including encryption and secure data storage. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
  },
  {
    id: "rights",
    icon: UserCheck,
    title: "Your Rights",
    content: "You have the right to access your personal information, request correction of inaccurate data, request deletion of your data, and opt out of marketing communications at any time. Contact us to exercise these rights."
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    content: "Our website may use cookies to enhance your experience, remember your preferences, and analyze site traffic. You can control cookie settings through your browser at any time."
  },
  {
    id: "contact",
    icon: Phone,
    title: "Contact Us",
    content: `For privacy-related questions or concerns, contact us at ${PHONE_NUMBER} or ${EMAIL}. We take your privacy seriously and will respond to your inquiries as quickly as possible.`
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

const Privacy = () => {
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
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-primary-foreground/80">
              Your privacy matters to us. Learn how we protect your information.
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
                  {privacyContent.map((item, index) => (
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
            <p>We are committed to protecting your privacy and handling your data responsibly.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
