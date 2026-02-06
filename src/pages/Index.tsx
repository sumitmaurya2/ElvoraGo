import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeOfferSection from "@/components/WhatWeOfferSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import StudentSection from "@/components/StudentSection";
import ConsultingSection from "@/components/ConsultingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatWeOfferSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <AISolutionsSection />
      <StudentSection />
      <ConsultingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
