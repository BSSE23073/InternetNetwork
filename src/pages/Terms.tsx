import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const termsContent = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using Internet Network ("Website," "we," "us," or "our") available at www.internetnetwork.us, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, you must discontinue use of this Website.`
  },
  {
    id: "company",
    title: "2. Company Information",
    content: `Business Name: Internet Network\n\nWebsite: https://www.internetnetwork.us\n\nBusiness Address: 3708 Merle Hay Rd Des Moines, IA 50310`
  },
  {
    id: "services",
    title: "3. Nature of Services",
    content: `Internet Network operates as an independent service guidance and coordination platform. We assist customers by helping them explore available internet, cable TV, and related service plans based on their ZIP code and preferences.\n\nOur services include:\n\n• Allowing customers to review and compare available plans\n• Collecting customer information after plan selection\n• Coordinating with third-party service providers to schedule installation appointments\n\nInternet Network does not provide internet, cable, or telecommunications services directly. All services are delivered solely by third-party providers.`
  },
  {
    id: "third-party",
    title: "4. Third-Party Providers",
    content: `All services displayed on this Website are offered by independent third-party service providers. Internet Network is not the owner, operator, or direct provider of any service.\n\nFinal decisions regarding service availability, installation, pricing, and performance are made exclusively by the respective service providers.`
  },
  {
    id: "availability",
    title: "5. Service Availability",
    content: `Service availability depends on customer location, ZIP code, provider coverage, and technical feasibility. Internet Network does not guarantee service availability in all areas.`
  },
  {
    id: "fees",
    title: "6. Fees and Charges",
    content: `Internet Network charges a one-time service fee and/or setup fee for service guidance and installation scheduling coordination.\n\nThese fees:\n\n• Are separate from provider charges\n• Do not represent monthly service costs\n• Are charged solely for coordination and assistance services\n\nAll applicable fees are disclosed before customer confirmation.`
  },
  {
    id: "billing",
    title: "7. Provider Relationship & Billing",
    content: `Internet Network does not handle provider billing, monthly charges, service accounts, or ongoing customer support after installation scheduling.\n\nAll billing, service delivery, maintenance, and support are handled directly by the selected service provider.`
  },
  {
    id: "cancellations",
    title: "8. Cancellations and Refunds",
    content: `Refund eligibility depends on whether coordination work or scheduling has already been performed. Service and setup fees may be non-refundable once provider coordination has begun.`
  },
  {
    id: "responsibilities",
    title: "9. User Responsibilities",
    content: `Customers agree to provide accurate and complete information to ensure successful coordination with service providers. Customers are responsible for confirming final service details with the provider.`
  },
  {
    id: "intellectual",
    title: "10. Intellectual Property",
    content: `All Website content, including text, layout, graphics, and branding, is the property of Internet Network and may not be used without written permission.`
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: `Internet Network is not responsible for:\n\n• Provider installation delays or cancellations\n• Service quality, speeds, or outages\n• Provider pricing or policy changes\n\nOur liability is limited to the amount paid for our service fee, to the maximum extent permitted by law.`
  },
  {
    id: "indemnification",
    title: "12. Indemnification",
    content: `You agree to indemnify and hold harmless Internet Network from any claims arising from misuse of the Website or violation of these Terms.`
  },
  {
    id: "modifications",
    title: "13. Modifications",
    content: `Internet Network reserves the right to update these Terms at any time. Continued use of the Website constitutes acceptance of revised Terms.`
  },
  {
    id: "governing",
    title: "14. Governing Law",
    content: `These Terms & Conditions shall be governed by the laws of the State of New York, United States.`
  },
  {
    id: "contact",
    title: "15. Contact Information",
    content: `For questions regarding these Terms & Conditions, please contact us through the contact details available on our Website.`
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

const Terms = () => {
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
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-primary-foreground/80">
              Please read these terms carefully before using our services
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
            {termsContent.map((item) => (
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
            <p>By using Internet Network, you acknowledge that you have read and understood these terms.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
