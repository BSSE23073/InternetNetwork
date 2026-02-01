import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const privacyContent = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Internet Network ("we," "our," or "us") is committed to protecting your privacy and handling your personal information in accordance with applicable U.S. privacy laws. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit www.internetnetwork.us or use our service guidance and coordination services.\n\nBy using our Website, you agree to the terms of this Privacy Policy. If you do not agree, please discontinue use of our Website.`
  },
  {
    id: "collect",
    title: "2. Information We Collect",
    content: `Personal Information\n\nWe may collect personal information that you voluntarily provide when using our services, including:\n\n• Name, email address, and phone number\n• Service address (street, city, state, ZIP code)\n• Selected service plan preferences\n• Any information you provide through contact forms or communications with us\n\nAutomatically Collected Information\n\nWhen you visit our Website, we may automatically collect certain information, including:\n\n• IP address and browser type\n• Device information and operating system\n• Pages visited and time spent on each page\n• Referring website addresses\n• Click patterns and other website usage data`
  },
  {
    id: "use",
    title: "3. How We Use Your Information",
    content: `We use the information collected to:\n\n• Provide service guidance and plan recommendations\n• Coordinate installation scheduling with third-party service providers\n• Communicate with you about services, availability, and updates\n• Improve our Website and user experience\n• Send promotional materials only if you have opted in\n• Comply with legal obligations\n• Prevent fraud and ensure the security of our services`
  },
  {
    id: "sharing",
    title: "4. Information Sharing and Disclosure",
    content: `We do not sell or rent your personal information to third parties.\n\nWe may share your information with:\n\n• Third-party service providers for the purpose of installation scheduling and service coordination\n• Legal authorities, when required by law or to protect the rights, safety, or property of Internet Network or others`
  },
  {
    id: "cookies",
    title: "5. Cookies and Tracking Technologies",
    content: `We use cookies and similar technologies to enhance Website performance, track usage patterns, and improve user experience. You may adjust your browser settings to refuse cookies, but some Website features may not function properly.`
  },
  {
    id: "security",
    title: "6. Data Security",
    content: `We implement industry-standard technical and organizational measures to protect your personal information. However, no system is completely secure, and we cannot guarantee absolute security.`
  },
  {
    id: "rights",
    title: "7. Your Privacy Rights",
    content: `You may access, update, or request deletion of your personal information by contacting us directly. Certain information may be retained to comply with legal obligations or enforce agreements.`
  },
  {
    id: "ccpa",
    title: "8. California Privacy Rights (CCPA)",
    content: `California residents have specific rights under the CCPA, including the right to request disclosure of information collected, the right to request deletion, and the right to opt-out of the sale of personal information. Internet Network does not sell personal information.`
  },
  {
    id: "children",
    title: "9. Children's Privacy",
    content: `Our services are not directed to individuals under 13. We do not knowingly collect personal information from children under 13.`
  },
  {
    id: "links",
    title: "10. Third-Party Links",
    content: `Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of third-party websites.`
  },
  {
    id: "changes",
    title: "11. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Effective Date." Continued use of the Website constitutes acceptance of the updated Privacy Policy.`
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have questions or concerns about this Privacy Policy or our data practices, please contact us:\n\nInternet Network\n\nWebsite: https://www.internetnetwork.us\n\nEmail: Support@internetnetwork.us\n\nPhone: (515) 305-4012\n\nAddress: 3708 Merle Hay Rd Des Moines, IA 50310`
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
            {privacyContent.map((item) => (
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
            <p>We are committed to protecting your privacy and handling your data responsibly.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
