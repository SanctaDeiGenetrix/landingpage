import { useLanguage } from "@/contexts/LanguageContext";
import ImageCarousel from "./ImageCarousel";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-deep-blue/50" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 cinematic-text">
              {t("about.headline")}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t("about.text")}
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden group">
            <ImageCarousel />
            {/* Replace with carousel -->
            <div className="absolute inset-0 gradient-magical opacity-50 group-hover:opacity-70 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-magical-gold rounded-full magical-glow animate-glow-pulse" />
            </div>
            {/* Placeholder for ambient Lottie animation */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
