import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Users, Target, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PHONE_NUMBER = "1(515)-305-4012";
const PHONE_LINK = "tel:+15153054012";
const EMAIL = "support@internetnetwork.com";
const ADDRESS = "3708 Merle Hay Rd, Des Moines, IA 50310";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description:
      "We prioritize your needs and work tirelessly to find the best solutions for your connectivity requirements.",
  },
  {
    icon: Target,
    title: "Expert Guidance",
    description:
      "Our knowledgeable team stays up-to-date with the latest offerings to provide informed recommendations.",
  },
  {
    icon: Award,
    title: "Quality Service",
    description:
      "We partner only with trusted providers to ensure you receive reliable, high-quality internet and TV service.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Internet Network</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            Your trusted partner for finding the perfect internet and TV solutions.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Internet Network is an <strong className="text-foreground">independent marketing partner</strong>{" "}
                dedicated to helping households and businesses find the best internet and television services available
                in their area.
              </p>
              <p>
                We understand that choosing the right internet and TV provider can be overwhelming with so many options
                available. That's why we've made it our mission to simplify the process by providing personalized
                recommendations based on your unique needs and budget.
              </p>
              <p>
                Our team of experts stays current with the latest plans, promotions, and technologies from top providers
                across the nation. When you call us, you're not just getting a sales pitch – you're getting honest
                advice from people who genuinely want to help you stay connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-0 shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-muted/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Important Information</h3>
                <p className="text-muted-foreground">
                  Internet Network operates as an independent marketing partner. We are not directly affiliated with any
                  specific internet or television service provider. Our role is to help connect you with providers that
                  best match your needs. All services are provided directly by the respective service providers, and
                  their terms and conditions apply.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24 section-alt">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <Card className="bg-card">
              <CardContent className="pt-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href={PHONE_LINK} className="text-primary hover:underline">
                  {PHONE_NUMBER}
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="pt-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href={`mailto:${EMAIL}`} className="text-primary hover:underline break-all">
                  {EMAIL}
                </a>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="pt-6 text-center">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Plan?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Our experts are standing by to help you get connected.
          </p>
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href={PHONE_LINK}>
              <Phone className="h-5 w-5" />
              Call {PHONE_NUMBER}
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
