import { Layout } from "@/components/layout/Layout";
import { Phone, Wifi, Tv, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { motion } from "framer-motion";
import fiberInternet from "@/assets/fiber-internet.jpg";
import tvEntertainment from "@/assets/tv-entertainment.jpg";
import bundlePackage from "@/assets/bundle-package.jpg";

const PHONE_NUMBER = "1(515)-305-4012";
const PHONE_LINK = "tel:+15153054012";

const internetPlans = [
  {
    name: "Basic Internet",
    price: "$39.99",
    description: "Up to 100 Mbps",
    features: [
      "Great for browsing & email",
      "Connect up to 5 devices",
      "Standard WiFi router included",
      "Perfect for small households",
    ],
    details: [
      "24/7 Technical Support",
      "No annual contract required",
      "Self-installation option available",
      "30-day satisfaction guarantee",
    ],
  },
  {
    name: "Plus Internet",
    price: "$59.99",
    description: "Up to 300 Mbps",
    features: [
      "Perfect for streaming",
      "Connect up to 10 devices",
      "Enhanced WiFi router included",
      "No data caps",
      "Great for work from home",
    ],
    details: [
      "Priority customer support",
      "Free professional installation",
      "WiFi network optimization",
      "Parental controls included",
    ],
    popular: true,
  },
  {
    name: "Premium Internet",
    price: "$79.99",
    description: "Up to 500 Mbps",
    features: [
      "Ideal for gaming & 4K streaming",
      "Unlimited device connections",
      "Premium WiFi 6 router",
      "No data caps",
      "Priority support",
    ],
    details: [
      "Dedicated support line",
      "Advanced security suite",
      "Guest network capability",
      "Speed guarantee or credit",
    ],
  },
  {
    name: "Ultra Internet",
    price: "$119.99",
    description: "Up to 1 Gbps",
    features: [
      "Best for power users",
      "Whole-home mesh WiFi",
      "Unlimited everything",
      "Dedicated support line",
      "Professional installation",
    ],
    details: [
      "Premium mesh WiFi system included",
      "White-glove installation service",
      "Direct technician support line",
      "Business-class reliability",
    ],
  },
];

const tvPackages = [
  {
    name: "Local Channels",
    price: "$30.00",
    description: "30+ channels",
    features: [
      "Local broadcast networks",
      "Basic cable channels",
      "Cloud DVR (50 hours)",
      "Watch on any device",
    ],
    details: [
      "ABC, NBC, CBS, FOX included",
      "On-demand content library",
      "Restart live TV feature",
      "7-day catch-up available",
    ],
  },
  {
    name: "Entertainment",
    price: "$79.99",
    description: "125+ channels",
    features: [
      "All local channels",
      "Popular entertainment networks",
      "Sports channels",
      "Cloud DVR (100 hours)",
      "3 simultaneous streams",
    ],
    details: [
      "ESPN, TNT, TBS, USA included",
      "Premium on-demand library",
      "Downloadable content",
      "Multi-device support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "$149.99",
    description: "200+ channels",
    features: [
      "All entertainment channels",
      "Premium movie channels",
      "International channels",
      "Cloud DVR (250 hours)",
      "4K content access",
    ],
    details: [
      "HBO, Showtime, Starz included",
      "Latest movie releases",
      "Exclusive original content",
      "Advanced recording features",
    ],
  },
  {
    name: "Ultimate",
    price: "$199.99",
    description: "300+ channels",
    features: [
      "Every channel available",
      "All premium networks",
      "Unlimited DVR storage",
      "4 simultaneous streams",
      "Premium sports packages",
    ],
    details: [
      "NFL Sunday Ticket eligible",
      "4K HDR content",
      "Priority streaming",
      "Family account sharing",
    ],
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    price: "$69.99",
    description: "Internet + Local TV",
    features: [
      "Basic Internet (100 Mbps)",
      "Local Channels (30+)",
      "Standard equipment",
      "Save vs. separate plans",
    ],
    details: [
      "Simple setup process",
      "Single bill for all services",
      "Bundle discount applied",
      "Upgrade anytime",
    ],
  },
  {
    name: "Family Bundle",
    price: "$119.99",
    description: "Internet + Entertainment",
    features: [
      "Plus Internet (300 Mbps)",
      "Entertainment TV (125+ ch)",
      "WiFi 6 router",
      "Cloud DVR included",
      "Whole-home coverage",
    ],
    details: [
      "Best value for families",
      "Parental controls",
      "Kids-safe streaming",
      "Multi-room DVR access",
    ],
    popular: true,
  },
  {
    name: "Premium Bundle",
    price: "$159.99",
    description: "Internet + Premium TV",
    features: [
      "Premium Internet (500 Mbps)",
      "Premium TV (200+ ch)",
      "Whole-home WiFi",
      "250 hours DVR",
      "4K streaming",
    ],
    details: [
      "All premium channels",
      "Latest equipment",
      "Concierge support",
      "Price lock guarantee",
    ],
  },
  {
    name: "Ultimate Bundle",
    price: "$199.99",
    description: "The Complete Package",
    features: [
      "Ultra Internet (1 Gbps)",
      "Ultimate TV (300+ ch)",
      "Mesh WiFi system",
      "Unlimited DVR",
      "Priority support",
    ],
    details: [
      "Best speeds + content",
      "White-glove service",
      "VIP support line",
      "Future upgrade priority",
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Plans & Pricing
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Choose from our range of internet, TV, and bundle packages designed to fit every need and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internet Plans */}
      <section id="internet" className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Wifi className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Home Internet</h2>
                <p className="text-muted-foreground">High-speed internet for every household</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={fiberInternet} 
                alt="Fiber internet connection" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {internetPlans.map((plan, index) => (
              <ServiceCard key={plan.name} {...plan} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* TV Packages */}
      <section id="tv" className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-12"
          >
            <div className="hidden lg:block order-2 lg:order-1">
              <img 
                src={tvEntertainment} 
                alt="TV entertainment" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="flex items-center gap-4 order-1 lg:order-2">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                <Tv className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Cable & TV Packages</h2>
                <p className="text-muted-foreground">Entertainment for the whole family</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {tvPackages.map((plan, index) => (
              <ServiceCard key={plan.name} {...plan} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bundles */}
      <section id="bundles" className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-12"
          >
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Package className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Internet + TV Bundles</h2>
                <p className="text-muted-foreground">Save more when you bundle services</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={bundlePackage} 
                alt="Bundle package" 
                className="w-full h-48 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {bundles.map((plan, index) => (
              <ServiceCard key={plan.name} {...plan} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t">
        <div className="container">
          <p className="text-sm text-muted-foreground text-center max-w-3xl mx-auto">
            * Prices shown are starting prices and may vary based on location and availability. 
            Equipment fees, taxes, and other charges may apply. Contact us for complete pricing details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not Sure Which Plan is Right for You?</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Call our experts and we'll help you find the perfect solution for your needs and budget.
            </p>
            <Button asChild size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg">
              <a href={PHONE_LINK}>
                <Phone className="h-5 w-5" />
                Call {PHONE_NUMBER}
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
