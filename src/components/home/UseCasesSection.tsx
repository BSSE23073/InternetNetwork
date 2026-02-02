import { Home, Briefcase, Smartphone, ArrowRight, Phone, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import streamingFamily from "@/assets/streaming-family.jpg";
import wifiRouter from "@/assets/wifi-router.jpg";
import supportTeam from "@/assets/support-team.jpg";

const sections = [
  {
    icon: Home,
    title: "Ideal for Every Home",
    description: "Whether you're a family of streamers, remote workers, or casual browsers, we have plans that fit your lifestyle. Enjoy uninterrupted entertainment, smooth video calls, and fast downloads.",
    features: ["Multiple device support", "Whole-home WiFi coverage", "Parental controls available"],
    gradient: "from-primary to-accent",
    image: streamingFamily,
  },
  {
    icon: Briefcase,
    title: "Power Your Business Forward",
    description: "Keep your business running smoothly with enterprise-grade internet solutions. From small offices to large operations, we have the bandwidth to support your growth.",
    features: ["Dedicated business lines", "Priority customer support", "Scalable bandwidth options"],
    gradient: "from-accent to-secondary",
    image: supportTeam,
  },
  {
    icon: Smartphone,
    title: "Ready for the Future",
    description: "Connect all your smart devices seamlessly. From smart thermostats to security cameras, our reliable network keeps your smart home running without a hitch.",
    features: ["IoT device optimization", "Low latency connections", "Future-proof technology"],
    gradient: "from-secondary to-primary",
    image: wifiRouter,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function UseCasesSection() {
  return (
    <section className="py-16 md:py-24 section-alt">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Solutions for <span className="text-gradient">Every Need</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From homes to businesses, we provide tailored solutions for all your connectivity needs.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div key={section.title} variants={itemVariants}>
              <Card className="bg-card border-0 shadow-xl h-full card-hover group overflow-hidden relative">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${section.gradient}`} />
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent`} />
                </div>
                <CardHeader className="pb-4 pt-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-4 shadow-lg -mt-12 relative z-10 border-4 border-card`}
                  >
                    <section.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground mb-5 leading-relaxed">{section.description}</p>
                  <ul className="space-y-3 mb-6">
                    {section.features.map((feature, i) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center gap-3 text-sm group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <div className={`h-6 w-6 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                          <ArrowRight className="h-3 w-3 text-white" />
                        </div>
                        <span className="group-hover/item:text-primary transition-colors">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button asChild className="w-full gap-2 bg-primary hover:bg-primary/90 text-white">
                      <a href="tel:+15153054012">
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary hover:text-white">
                      <Link to="/contact?source=availability">
                        <FileText className="h-4 w-4" />
                        Check Availability
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
