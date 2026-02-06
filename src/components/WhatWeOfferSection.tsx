import { Globe, Server, Brain, GraduationCap, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const offerings = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Fast, responsive, and modern websites tailored to your business.",
  },
  {
    icon: Server,
    title: "Backend & API Solutions",
    description: "Secure, scalable backend systems powering your applications.",
  },
  {
    icon: Brain,
    title: "AI-Powered Tools",
    description: "Smart AI integrations to automate and enhance your products.",
  },
  {
    icon: GraduationCap,
    title: "Student Projects & Portfolios",
    description: "Professional portfolios and projects for placements and careers.",
  },
  {
    icon: Lightbulb,
    title: "Startup Consulting",
    description: "From idea validation to MVP planning, we guide your journey.",
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="What We Offer"
          title="Solutions That Drive Growth"
          subtitle="We combine modern technology with practical expertise to deliver results."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offerings.map((offer, index) => (
            <AnimatedSection key={offer.title} delay={index * 0.1}>
              <div className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5">
                  <offer.icon className="text-primary-foreground" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{offer.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
