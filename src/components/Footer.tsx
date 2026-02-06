import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading text-background mb-3">
              <span className="text-primary">Tech</span>Starter
            </h3>
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Smart Web, Backend & AI Solutions for Businesses and Students. Turning ideas into scalable digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "AI Solutions", href: "#ai" },
                { label: "Students", href: "#students" },
                { label: "Consulting", href: "#consulting" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-sm text-background/50 hover:text-primary transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-background mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Mail, href: "mailto:hello@techstarter.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:text-primary hover:bg-background/20 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} TechStarter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
