import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ badge, title, subtitle }: SectionHeadingProps) => {
  return (
    <AnimatedSection className="text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeading;
