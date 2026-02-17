import { useState } from "react";
import { Check, Phone, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  details?: string[];
  index?: number;
}

const PHONE_LINK = "tel:+18883536923";

export function ServiceCard({ name, price, description, features, popular, details, index = 0 }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className={cn(
          "relative overflow-hidden card-hover h-full",
          popular && "border-2 border-primary glow-primary"
        )}
      >
        {popular && (
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold py-1.5 text-center">
            ⭐ Most Popular
          </div>
        )}
        
        <CardHeader className={cn("pb-4", popular && "pt-10")}>
          <CardTitle className="text-xl">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="mt-3">
            <span className="text-4xl font-bold text-gradient">{price}</span>
            <span className="text-muted-foreground">/mo</span>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <ul className="space-y-2.5">
            {features.slice(0, isExpanded ? features.length : 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm">
                <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3 w-3 text-secondary" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Expandable Details */}
          <AnimatePresence>
            {isExpanded && details && details.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-sm mb-3">Additional Details:</h4>
                  <ul className="space-y-2">
                    {details.map((detail) => (
                      <li key={detail} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {(details && details.length > 0) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors w-full justify-center pt-2"
            >
              {isExpanded ? "Show Less" : "Show More"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </button>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-2 pt-4">
            <Button asChild className="w-full gap-2 bg-primary hover:bg-primary/90 text-white">
              <a href={PHONE_LINK}>
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
  );
}
