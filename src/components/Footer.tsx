import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 bg-midnight py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logotipo.png"
                alt="Genetrix Logo"
                className="h-16 w-16"
              />
              <span className="font-cinzel text-2xl font-bold text-yellow-500 cinematic-text mt-2 ml-[-14px]">
                Genetrix
              </span>
            </div>
            <p className="text-foreground/60 text-sm italic">
              {t("footer.tagline")}
            </p>
          </div>

          <div>
            <h4 className="font-cinzel text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-foreground/70 text-sm">
              <p>contact@genetrixstudios.com</p>
              <p>+55 (45) 991580812</p>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-mystic-purple/30 flex items-center justify-center hover:bg-magical-gold/30 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-mystic-purple/30 flex items-center justify-center hover:bg-magical-gold/30 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-mystic-purple/30 flex items-center justify-center hover:bg-magical-gold/30 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 text-center text-foreground/50 text-sm">
          <p>© 2025 Genetrix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
