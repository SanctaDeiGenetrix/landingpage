import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const CallToAction = () => {
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
    <section
      id="call-to-action"
      className="py-24 px-6 relative overflow-hidden"
    >
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

        <a
          href="#contact"
          className="w-full magical-glow gradient-gold text-lg text-primary-foreground py-6 rounded-2xl font-semibold text-center inline-block mt-8 hover:scale-105 transition-transform"
        >
          {t("contact.send")}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
