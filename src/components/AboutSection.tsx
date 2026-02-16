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
import founder from "../assets/team/founder.jpeg";
import CoFounder from "../assets/team/cofounder.jpg";
import Shubham from "../assets/team/shubham.jpeg";
import Siddharth from "../assets/team/siddharth.jpeg";

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
    about:
      "Founder of ElvoraGo, a Computer Science engineer and full-stack developer passionate about scalable architecture, performance-driven systems, and building future-ready digital products.",
    portfolio: "#",
    github: "https://github.com/sumitmaurya2",
    email: "mailto:sumit2004015@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-maurya-34798032a/",
  },
  {
    name: "Sumit Vishwakrma",
    role: "Co-Founder & Full Stack Engineer",
    image: CoFounder,
    about:
      "Co-Founder of ElvoraGo, a Computer Science engineer and full-stack developer with knowledge of AI tools and a focus on scalable, modern digital products.",
    portfolio: "https://sumit-vishwakarma.netlify.app/",
    github: "https://github.com/cjsumit",
    email: "mailto:vishwakarmasumit272@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-vishwakarma272/",
  },
  {
    name: "Siddharth Verma",
    role: "UI/UX Designer",
    image: Siddharth,
    about:
      "UI/UX Designer at ElvoraGo specializing in user research, interaction design, and crafting visually appealing, accessible, and intuitive digital experiences.",
    portfolio: "#",
    github: "https://github.com/siddhartha0812",
    email: "mailto:siddharthaverma0810@gmail.com",
    linkedin: "https://www.linkedin.com/in/siddharthav08/",
  },
  {
    name: "Shubham Bind",
    role: "UI/UX Designer",
    image: Shubham,
    about:
      "UI/UX Designer at ElvoraGo focused on intuitive user experiences, clean visual design, usability, and creating modern, user-centered digital interfaces.",
    portfolio: "#",
    github: "https://github.com/Shubham123-k",
    email: "mailto:shubhamkbind69@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubham-bind-53305432b/",
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
