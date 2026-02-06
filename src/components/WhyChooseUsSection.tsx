import { Code2, Layers, DollarSign, Zap, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const reasons = [
  { icon: Code2, title: "Clean & Scalable Code", description: "Production-ready code built with best practices and modern patterns." },
  { icon: Layers, title: "Modern Tech Stack", description: "React, Node.js, AI/ML — we use the latest and greatest tools." },
  { icon: DollarSign, title: "Affordable Pricing", description: "High-quality solutions that fit your budget without compromise." },
  { icon: Zap, title: "Fast Delivery", description: "Rapid development cycles so you can launch and iterate quickly." },
  { icon: HeartHandshake, title: "Long-term Support", description: "We're partners, not vendors. Ongoing support and maintenance." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Why Us"
          title="Why Choose Us"
          subtitle="We deliver more than code — we deliver confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.08}>
              <div className="text-center p-6 rounded-2xl hover:bg-card hover:shadow-card transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="text-primary" size={22} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
