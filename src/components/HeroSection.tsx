import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deep-blue to-mystic-purple">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magical-gold rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-haze rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </div>

      {/* Lottie Placeholder - particles would go here */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold mb-6 cinematic-text animate-fade-in">
          {t('hero.headline')}
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subheadline')}
        </p>
        <Button 
          onClick={scrollToExperiences}
          size="lg" 
          className="magical-glow text-lg px-8 py-6 animate-fade-in group"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.cta')}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-magical-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-magical-gold rounded-full animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
