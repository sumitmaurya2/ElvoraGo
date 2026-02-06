import { Award, Eye, BookOpen, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const coreValues = [
  { icon: Award, title: "Quality Over Quantity", description: "We focus on delivering excellence, not volume." },
  { icon: Eye, title: "Transparency", description: "Clear communication and honest timelines, always." },
  { icon: BookOpen, title: "Continuous Learning", description: "We stay ahead with the latest technologies and practices." },
  { icon: Heart, title: "Client-First Approach", description: "Your success is our success. Period." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="About Us"
          title="Who We Are"
          subtitle="A passionate team of engineers building the future of digital."
        />

        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-8 md:p-12 rounded-3xl bg-card border border-border shadow-card mb-12 text-center">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                We are a tech-focused startup founded by Computer Science engineers with a passion for building practical, scalable, and modern digital solutions. Our mission is to{" "}
                <span className="text-gradient-primary font-semibold">simplify technology</span>{" "}
                for businesses, startups, and students by delivering reliable and future-ready products.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="flex gap-4 p-6 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-primary" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
