import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PHONE_NUMBER = "(888) 353-6923";
const PHONE_LINK = "tel:+18883536923";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Ready to Get Connected?
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl mb-10 text-primary-foreground/85 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Call us today to find the perfect internet and TV package for your home or business. 
            Our experts are standing by to help you get started.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="text-lg gap-3 px-10 py-7 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/25 transition-all group"
            >
              <a href={PHONE_LINK} className="flex items-center justify-center">
                <Phone className="h-6 w-6" />
                Call Now: {PHONE_NUMBER}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
