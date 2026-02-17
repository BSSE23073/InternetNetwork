import { Phone, MessageSquare, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "1",
    title: "Call Us",
    description: "Reach out to our friendly team at (888) 353-6923 to discuss your internet and TV needs.",
  },
  {
    icon: MessageSquare,
    step: "2",
    title: "Tell Us Your Needs",
    description: "Share your usage requirements, budget, and preferences so we can find the best options for you.",
  },
  {
    icon: Calendar,
    step: "3",
    title: "Schedule Installation",
    description: "We'll coordinate with the provider to schedule a convenient installation date that works for you.",
  },
  {
    icon: CheckCircle,
    step: "4",
    title: "Get Connected",
    description: "Enjoy your new high-speed internet and TV service! Our support team is always here to help.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting connected is simple. Follow these four easy steps to start enjoying fast, reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
