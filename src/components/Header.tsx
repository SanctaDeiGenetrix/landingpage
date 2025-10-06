import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Sparkles } from "lucide-react";

const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-midnight/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <Sparkles className="w-6 h-6 text-magical-gold" /> */}
          <img src="/logotipo.png" alt="Genetrix Logo" className="h-16 w-16" />
          <span className="font-cinzel text-2xl font-bold text-yellow-500 cinematic-text mt-2 ml-[-14px]">
            Genetrix
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("experiences")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {t("header.experience")}
          </button>
          <button
            onClick={() => scrollToSection("collaboration")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {t("header.collaboration")}
          </button>
          <button
            onClick={() => scrollToSection("technology")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {t("header.technology")}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            {t("header.contact")}
          </button>
        </div>

        <LanguageSwitcher />
      </nav>
    </header>
  );
};

export default Header;
