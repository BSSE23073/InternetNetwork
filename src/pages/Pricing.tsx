import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingTiers = [
  { name: "Basic Assistance", price: "$70", description: "Provider comparison and general guidance." },
  { name: "Standard Assistance", price: "$80", description: "Plan comparison and recommendation support." },
  { name: "Order Processing Support", price: "$110", description: "Order submission assistance and documentation guidance." },
  { name: "Enhanced Coordination", price: "$150", description: "Full order coordination and customer support." },
  { name: "Advanced Coordination", price: "$180", description: "Dedicated order oversight with priority handling and multi-step process coordination." },
  { name: "Complete Full-Service Coordination", price: "$200", description: "End-to-end service management including documentation review and follow-up coordination." },
  { name: "Premium Priority Coordination", price: "$250", description: "Highest-level priority handling with expedited coordination and full service oversight." },
];

const Pricing = () => {
  return (
    <Layout>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pricing
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl md:text-3xl font-semibold text-primary mb-6"
            >
              Service Coordination Fees
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Internet Network operates as an independent marketing and service coordination company. We assist customers with provider comparison, plan selection guidance, and new service order coordination.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4"
            >
              We are not a direct internet or TV service provider. All provider service charges are billed separately by the selected provider.
            </motion.p>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 md:py-24">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Available Service Levels
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-hover">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">{tier.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-gradient">{tier.price}</span>
                      </div>
                    </CardHeader>
                    {tier.description && (
                      <CardContent>
                        <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-secondary" />
                          </div>
                          <span>{tier.description}</span>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto"
            >
              All services are provided online and via phone support. We do not operate a physical storefront and do not accept walk-in customers.
            </motion.p>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Pricing;
