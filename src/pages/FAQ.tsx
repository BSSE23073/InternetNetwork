import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Phone, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PHONE_NUMBER = "(888) 353-6923";
const PHONE_LINK = "tel:+18883536923";

const faqs = [
  {
    question: "What is Internet Network?",
    answer: "Internet Network is an independent service coordination partner that helps customers explore and compare internet and TV services from multiple providers across the United States.",
  },
  {
    question: "How Does Internet Network Work?",
    answer: "Simply enter your ZIP code or reach out to us directly. We'll identify the services available at your location and assist in coordinating installation with your chosen provider.",
  },
  {
    question: "Are the Prices Shown Guaranteed?",
    answer: "The prices displayed represent typical ranges based on current market information. Final pricing is confirmed during the availability check before you finalize your selection.",
  },
  {
    question: "How Long Does Installation Take?",
    answer: "Most providers schedule installation within 3–7 business days. Depending on your location, same-day or next-day options may also be available.",
  },
  {
    question: "Do I Pay Internet Network or the Service Provider?",
    answer: "All service payments are made directly to the third-party provider. Internet Network does not process or manage provider billing. However, we may charge a separate service and setup fee for coordinating your order and facilitating installation.",
  },
  {
    question: "What Services Are Available in My Area?",
    answer: "We show the services available at your location based on the address you provide. Enter your ZIP code on our website or call us at (515) 305-4012 to check availability.",
  },
  {
    question: "Are There Any Installation Fees?",
    answer: "Installation fees depend on the provider and may vary by location. Many providers include free installation as part of promotional offers. Internet Network will clearly outline any applicable fees before you finalize your order.",
  },
  {
    question: "Can I Cancel or Change My Service?",
    answer: "All service cancellations or changes must be handled directly with the service provider, as they manage your account. Please review the provider's terms of service for details on their specific policies.",
  },
  {
    question: "What If I Have Problems With My Service After Installation?",
    answer: "If you experience any issues after installation, please contact your service provider's customer support. They have dedicated technical teams to assist and resolve problems efficiently.",
  },
  {
    question: "Do You Offer Business Services?",
    answer: "While our primary focus is home internet and TV services, Internet Network can assist in connecting you with business internet solutions when needed. Contact us to discuss your business requirements.",
  },
  {
    question: "What Equipment Will I Need?",
    answer: "Required equipment depends on the provider and plan, and may include devices such as modems, routers, or other networking hardware. Some providers include equipment as part of the monthly plan, while others offer it for purchase separately.",
  },
  {
    question: "Are There Contracts or Commitments Required?",
    answer: "Some providers may require contracts or commitments for certain plans. Internet Network will inform you of any such requirements during the plan selection process.",
  },
  {
    question: "How Do I Contact Customer Support?",
    answer: "You can reach Internet Network customer support by phone at (515) 305-4012 or via email for assistance. We typically respond to inquiries within 24 hours.",
  },
  {
    question: "What Is Your Refund Policy?",
    answer: "Refunds for services are governed by the provider's policies. Please contact your service provider for details. For fees charged by Internet Network for service guidance or coordination, please refer to our Refund & Cancellation Policy page for complete information.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24 overflow-hidden relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur mb-6"
            >
              <HelpCircle className="h-8 w-8" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Find quick answers to common questions about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-card border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Have More Questions */}
      <section className="py-16 md:py-20 section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have More Questions?</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Can't find the answer you're looking for? Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="gap-2">
                  <a href={PHONE_LINK}>
                    <Phone className="h-5 w-5" />
                    Call {PHONE_NUMBER}
                  </a>
                </Button>
              </motion.div>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 hero-gradient text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Connected?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Start discovering the internet and TV services available in your area now.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 shadow-lg">
                <Link to="/contact?source=availability">Check Availability</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;