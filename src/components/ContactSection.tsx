import { useState } from "react";
import { Mail, MessageCircle, Phone, Send } from "lucide-react";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill all fields",
        description: "All inputs are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      toast({
        title: "Message Sent Successfully",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Server error. Please try again later.";

      toast({
        title: "Failed to Send",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Contact Us"
          title="Let's Build Something Amazing"
          subtitle="Get a free consultation today. We'd love to hear about your project."
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <Textarea
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </Button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="flex h-full flex-col justify-center space-y-8">
              <div>
                <h3 className="mb-2 text-xl font-bold">Get in Touch</h3>
                <p>We respond within 24 hours.</p>
              </div>

              <a href="mailto:hello@techstarter.com">
                <Mail size={20} /> hello@techstarter.com
              </a>

              <a href="tel:+919876543210">
                <Phone size={20} /> +91 98765 43210
              </a>

              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
