import { Phone, Shield, Clock, Users, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-home.jpg";

const PHONE_NUMBER = "1(515)-305-4012";
const PHONE_LINK = "tel:+15153054012";

const trustBadges = [
  { icon: Shield, label: "Secure & Private" },
  { icon: CheckCircle, label: "Verified Providers" },
  { icon: Clock, label: "24/7 Support" },
  { icon: Users, label: "Millions Served" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative hero-gradient text-primary-foreground py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Smart home connectivity" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
      </div>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Find Your Perfect Plan Today</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Fast, Reliable
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
              Internet & TV
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 text-primary-foreground/85 max-w-2xl mx-auto"
          >
            Compare top providers and find the perfect plan for your household. 
            Stream, work, and stay connected with lightning-fast speeds.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
          >
            <Button 
              asChild 
              size="lg" 
              className="text-lg gap-2 px-8 py-7 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all"
            >
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all cursor-default"
              >
                <badge.icon className="h-7 w-7" />
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
