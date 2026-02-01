import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const refundContent = [
  {
    id: "overview",
    title: "1. Overview",
    content: `This Refund & Cancellation Policy applies solely to the service guidance, coordination, and installation scheduling services provided by Internet Network. It does not cover any services, charges, or fees billed by third-party service providers (such as internet, cable, or telecommunications providers), which are subject to the providers' own terms and policies.`
  },
  {
    id: "completion",
    title: "2. Service Completion and Refunds",
    content: `Once Internet Network has completed its service obligations, including:\n\n• Collecting customer information,\n• Guiding customers in selecting service plans, and\n• Coordinating installation scheduling with the service provider\n\nand the third-party provider has completed the installation and activation of services, no refunds will be issued under any circumstances.`
  },
  {
    id: "non-refundable",
    title: "3. Non-Refundable Fees",
    content: `All fees charged by Internet Network for service guidance, coordination, and installation scheduling are non-refundable once services have been fully delivered.\n\nThis includes:\n\n• Service and setup fees\n• Coordination and scheduling charges\n• Any other fees related to Internet Network's facilitation services`
  },
  {
    id: "third-party",
    title: "4. Third-Party Provider Charges",
    content: `All charges, invoices, or fees from third-party providers are managed exclusively by the provider. Internet Network is not responsible for third-party billing, refunds, cancellations, or disputes. Customers must contact the provider directly for any provider-related issues.`
  },
  {
    id: "requests",
    title: "5. Refund Requests",
    content: `Refund requests will only be considered prior to completion of our services. To request a refund before service completion, customers should contact us with the following information:\n\n• Full name\n• Service address\n• Details of the service (invoice/order number, if available)\n• Reason for the request\n\nInternet Network reserves the right to evaluate all refund requests on a case-by-case basis and in accordance with this policy.`
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

const RefundPolicy = () => {
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
              <RotateCcw className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-lg text-primary-foreground/80">
              Understand our refund and cancellation guidelines
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
            {refundContent.map((item) => (
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
            <p>We're here to help you navigate any service-related concerns with your provider.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default RefundPolicy;
