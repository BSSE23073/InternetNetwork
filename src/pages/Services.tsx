import { Layout } from "@/components/layout/Layout";
import { Phone, Wifi, Tv, Package, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fiberInternet from "@/assets/fiber-internet.jpg";
import tvEntertainment from "@/assets/tv-entertainment.jpg";
import bundlePackage from "@/assets/bundle-package.jpg";

const PHONE_NUMBER = "1(515)-305-4012";
const PHONE_LINK = "tel:+15153054012";

const internetPlans = [
  {
    name: "Light Speed Plan",
    price: "$29.99 – $49.99",
    speed: "Up to ~100 Mbps",
    description: "Good for basic browsing, email, and light streaming.",
  },
  {
    name: "Everyday Speed Plan",
    price: "$49.99 – $79.99",
    speed: "Up to ~300–500 Mbps",
    description: "Ideal for streaming, video calls, and multi-device households.",
    popular: true,
  },
  {
    name: "Premium Speed Plan",
    price: "$79.99 – $109.99",
    speed: "Up to ~1 Gbps",
    description: "Perfect for gaming, 4K streaming, and heavy usage.",
  },
];

const tvPackages = [
  {
    name: "Essential Channel Package",
    price: "$30 – $60",
    channels: "~Basic channels",
    description: "Basic channel lineup for essential entertainment.",
  },
  {
    name: "Premium Channel Package",
    price: "$60 – $90",
    channels: "~Expanded lineup including sports and family channels",
    description: "Expanded lineup including sports and family channels.",
    popular: true,
  },
  {
    name: "Ultimate Channel Package",
    price: "$90 – $150",
    channels: "~Broad range of channels including premium content",
    description: "Broad range of channels including premium content.",
  },
];

const bundles = [
  {
    name: "Basic Bundle",
    price: "$59.99 – $89.99",
    description: "Typically includes entry internet speeds (100–200 Mbps) and a basic TV package.",
  },
  {
    name: "Standard Bundle Package",
    price: "$89.99 – $129.99",
    description: "Mid-range internet (300–500 Mbps) with more channels.",
    popular: true,
  },
  {
    name: "Premium Bundle",
    price: "$129.99 – $199.99",
    description: "Higher speeds and expanded TV lineups with additional options.",
  },
];

const homeInternetFeatures = [
  "A wide range of speed options to match your needs (from budget plans to gigabit service)",
  "Plans from trusted nationwide providers",
  "Coordination of professional installation scheduling",
  "Equipment and router choices depending on provider availability",
  "Unlimited data on many plans",
  "Access to 24/7 technical support resources",
];

const tvFeatures = [
  "Multiple channel lineups to choose from",
  "HD and premium channel options",
  "DVR service for recording favorites",
  "Sports and movie package add-ons",
  "On-demand content libraries",
  "Multi-room viewing capabilities",
];

const bundleFeatures = [
  "Combined internet and TV services in one package",
  "Single, convenient monthly billing",
  "Potential savings compared to standalone plans",
  "Coordinated installation scheduling with your provider",
  "Premium channel add-on options",
  "Flexible package configurations to meet your needs",
];

const importantInfo = [
  "Prices vary by location, service provider, and current promotions.",
  "Installation and equipment costs are determined by the provider and may differ by plan.",
  "A separate service and setup fee is charged by Internet Network for coordinating your order.",
  "Service availability depends on your location and the coverage of participating providers.",
  "Internet speeds, channel lineups, and features may vary depending on the provider and your location.",
];

const pricingInfo = [
  "Prices depend on your location, service provider, and current promotions.",
  "Final pricing is confirmed when checking availability with providers.",
  "Installation fees vary by provider (typically $0–$100+).",
  "Equipment rental may be required and varies by provider (often $5–$15/month).",
  "Additional taxes, fees, and surcharges may apply.",
];

const serviceSetupFees = [
  "Internet Network applies a service and setup fee for processing and coordinating orders.",
  "Setup fees will be disclosed before completing your order.",
  "Service and setup fees from Internet Network are non-refundable.",
];

const notIncluded = [
  "Installation costs (varies by provider)",
  "Equipment purchase or rental fees",
  "Taxes and government charges",
  "Early termination fees (if applicable)",
  "Maintenance or service call fees",
  "Add-ons or premium channel upgrades",
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
              Explore Our Services
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Find the best home internet and TV plans from participating providers, with pricing and options tailored to your location and needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Home Internet */}
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
                <p className="text-muted-foreground">$39.99 – $119.99/mo</p>
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

          <div className="mb-8">
            <p className="text-muted-foreground max-w-4xl">
              Explore the top internet plans available in your area, ranging from affordable basic connections (around 50–100 Mbps) to high-speed and gigabit-class services (up to 1,000+ Mbps) offered by leading providers. Whether you need dependable connectivity for remote work, streaming, gaming, or multiple users, Internet Network helps you find tailored options that suit your lifestyle and location.
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Pricing and speeds vary by provider and ZIP code.
            </p>
          </div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {internetPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-2 border-primary' : ''}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold py-1.5 text-center">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{plan.price} / mo</div>
                    <CardDescription>{plan.speed}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">What's Included:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {homeInternetFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact?source=availability">Check Availability</Link>
            </Button>
          </div>
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
                <h2 className="text-3xl font-bold">Cable / TV Packages</h2>
                <p className="text-muted-foreground">$30 – $199.99/mo</p>
              </div>
            </div>
          </motion.div>

          <div className="mb-8">
            <p className="text-muted-foreground max-w-4xl">
              Explore available TV plans offering a wide selection of channel lineups to match your entertainment preferences. Packages can range from basic options with essential channels to premium bundles with sports, movies, and HD content, depending on your location and provider. Internet Network helps you find the TV package that fits your viewing needs and budget.
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Pricing varies by location and provider.
            </p>
          </div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {tvPackages.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-2 border-primary' : ''}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold py-1.5 text-center">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{plan.price} / mo</div>
                    <CardDescription>{plan.channels}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">What's Included:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {tvFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact?source=availability">Check Availability</Link>
            </Button>
          </div>
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
                <p className="text-muted-foreground">$69.99 – $199.99/mo</p>
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

          <div className="mb-8">
            <p className="text-muted-foreground max-w-4xl">
              Bundle your internet and TV services for added convenience and potential savings compared with purchasing them separately. Available packages range from basic internet + TV options to more robust bundles that include faster internet speeds and expanded channel lineups. Internet Network helps you explore these bundled plans and find the best combination for your household and budget.
            </p>
            <p className="text-sm text-muted-foreground mt-2 italic">
              Pricing varies by location, provider, and chosen services.
            </p>
          </div>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {bundles.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-2 border-primary' : ''}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-xs font-semibold py-1.5 text-center">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{plan.price} / mo</div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">What's Included:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {bundleFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mt-6 text-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact?source=availability">Check Availability</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Important Information</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    Important Pricing Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pricingInfo.map((info) => (
                      <li key={info} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {info}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service and Setup Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {serviceSetupFees.map((fee) => (
                      <li key={fee} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {fee}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {notIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-destructive">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <p className="text-sm text-muted-foreground text-center italic">
                Prices listed reflect typical U.S. market ranges in 2025–2026 and may change.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Customized Pricing</h2>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Enter your location to see exact pricing and plans available in your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg">
                <Link to="/contact?source=availability">Check Availability Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                <a href={PHONE_LINK}>
                  <Phone className="h-5 w-5" />
                  Call {PHONE_NUMBER}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;