import { Bot, MessageSquare, FileSearch, Pen, HelpCircle, Briefcase, Rocket, BookOpen, Building } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const aiServices = [
  { icon: Bot, title: "AI Chatbots for Websites" },
  { icon: MessageSquare, title: "Customer Support Automation" },
  { icon: FileSearch, title: "Resume & Profile Analysis" },
  { icon: Pen, title: "AI-Powered Content Tools" },
  { icon: HelpCircle, title: "Smart FAQ & Helpdesk Systems" },
];

const useCases = [
  { icon: Building, label: "Business Websites" },
  { icon: Rocket, label: "Startups" },
  { icon: BookOpen, label: "EdTech Platforms" },
  { icon: Briefcase, label: "Service Companies" },
];

const AISolutionsSection = () => {
  return (
    <section id="ai" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Subtle decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="AI Solutions"
          title="AI-Powered Solutions"
          subtitle="We integrate AI into your products to automate tasks, improve customer experience, and save time."
        />

        <div className="max-w-5xl mx-auto">
          {/* AI Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {aiServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-primary" size={22} />
                  </div>
                  <span className="font-medium text-foreground">{service.title}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Use Cases */}
          <AnimatedSection>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-6">Perfect Use Cases</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {useCases.map((uc) => (
                  <div
                    key={uc.label}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground"
                  >
                    <uc.icon size={16} className="text-primary" />
                    {uc.label}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;
