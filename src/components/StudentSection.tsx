import { GraduationCap, FolderCode, Globe, Github, FileText, Users, Briefcase, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const studentServices = [
  { icon: FolderCode, title: "Final-Year & Mini Projects" },
  { icon: FileText, title: "Resume-Ready MERN Projects" },
  { icon: Globe, title: "Portfolio Websites" },
  { icon: Github, title: "GitHub & LinkedIn Optimization" },
  { icon: BookOpen, title: "Project Explanation & Docs" },
];

const perfectFor = [
  { icon: GraduationCap, label: "CSE / IT Students" },
  { icon: Users, label: "Final-Year Students" },
  { icon: Briefcase, label: "Freshers & Job Seekers" },
];

const StudentSection = () => {
  return (
    <section id="students" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="For Students"
          title="Solutions for Students & Freshers"
          subtitle="Build strong technical profiles with real-world projects, professional portfolios, and career-ready tools."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <AnimatedSection>
              <div className="space-y-4">
                {studentServices.map((service) => (
                  <div
                    key={service.title}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-accent-foreground" size={20} />
                    </div>
                    <span className="font-medium text-foreground">{service.title}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Perfect For + CTA */}
            <AnimatedSection delay={0.15}>
              <div className="p-8 rounded-3xl bg-secondary/50 border border-border h-full flex flex-col justify-center">
                <h3 className="text-xl font-bold text-foreground mb-6">Perfect For</h3>
                <div className="space-y-4 mb-8">
                  {perfectFor.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="text-primary" size={20} />
                      </div>
                      <span className="font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Stand out in placements and internships with professional-grade projects and a polished online presence.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSection;
