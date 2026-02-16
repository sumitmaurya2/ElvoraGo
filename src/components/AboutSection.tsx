import {
  Award,
  Eye,
  BookOpen,
  Heart,
  Github,
  Mail,
  Linkedin,
  Briefcase,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

// ✅ FIXED IMAGE PATHS
// ✅ Correct Image Imports (case-sensitive safe)
import founder from "../assets/team/founder.jpeg";
import coFounder from "../assets/team/cofounder.jpg";
import shubham from "../assets/team/shubham.jpeg";
import siddharth from "../assets/team/siddharth.jpeg";


const coreValues = [
  { icon: Award, title: "Quality Over Quantity", description: "We focus on delivering excellence, not volume." },
  { icon: Eye, title: "Transparency", description: "Clear communication and honest timelines, always." },
  { icon: BookOpen, title: "Continuous Learning", description: "We stay ahead with the latest technologies and practices." },
  { icon: Heart, title: "Client-First Approach", description: "Your success is our success. Period." },
];

const teamMembers = [
  {
    name: "Sumit Maurya",
    role: "Founder & Full Stack Engineer",
    image: founder,
    ...
  },
  {
    name: "Sumit Vishwakrma",
    role: "Co-Founder & Full Stack Engineer",
    image: coFounder,
    ...
  },
  {
    name: "Siddharth Verma",
    role: "UI/UX Designer",
    image: siddharth,
    ...
  },
  {
    name: "Shubham Bind",
    role: "UI/UX Designer",
    image: shubham,
    ...
  },
];


const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-100
                 dark:from-[#050a05] dark:via-[#0c140c] dark:to-[#050a05]"
    >
      {/* Rest of your component remains exactly same */}
    </section>
  );
};

export default AboutSection;
