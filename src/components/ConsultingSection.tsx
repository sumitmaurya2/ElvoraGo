import { Lightbulb, Target, Layers, ListChecks, Calculator, Rocket, User, Building } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const consultingServices = [
  { icon: Lightbulb, title: "Idea Validation", description: "Test your concept before investing resources." },
  { icon: Target, title: "MVP Planning", description: "Define the minimum viable product to launch fast." },
  { icon: Layers, title: "Tech Stack Selection", description: "Choose the right tools for your scale and budget." },
  { icon: ListChecks, title: "Feature Breakdown", description: "Prioritize features that matter most to users." },
  { icon: Calculator, title: "Cost Estimation", description: "Get a realistic development cost breakdown." },
];

const whoFor = [
  { icon: Rocket, label: "Startup Founders" },
  { icon: User, label: "Non-Tech Entrepreneurs" },
  { icon: Building, label: "Early-Stage Startups" },
];

const ConsultingSection = () => {
  return (
    <section id="consulting" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Consulting"
          title="Startup & Tech Consulting"
          subtitle="Have an idea but don't know how to build it? We help you transform your idea into a clear technical roadmap."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {consultingServices.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="text-accent" size={22} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">Who This Is For</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {whoFor.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground"
                  >
                    <item.icon size={16} className="text-accent" />
                    {item.label}
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

export default ConsultingSection;
