import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-ethereal" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          {/* <Sparkles className="w-12 h-12 text-magical-gold mx-auto mb-6 animate-glow-pulse" /> */}
          <img
            src="/logo.png"
            alt="Genetrix Logo"
            className="h-[280px] w-[280px] mx-auto mb-6"
          />
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 cinematic-text">
            {t("contact.headline")}
          </h2>
          <p className="text-lg text-foreground/80">{t("contact.text")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-card/50 backdrop-blur p-8 rounded-2xl border border-border/50 magical-glow"
        >
          <div>
            <Input
              placeholder={t("contact.name")}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="bg-background/50 border-magical-gold/30 focus:border-magical-gold transition-colors"
            />
          </div>

          <div>
            <Input
              type="email"
              placeholder={t("contact.email")}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className="bg-background/50 border-magical-gold/30 focus:border-magical-gold transition-colors"
            />
          </div>

          <div>
            <Textarea
              placeholder={t("contact.message")}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
              rows={6}
              className="bg-background/50 border-magical-gold/30 focus:border-magical-gold transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full magical-glow text-lg py-6"
          >
            {t("contact.send")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
