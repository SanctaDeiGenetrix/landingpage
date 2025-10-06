import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Handshake } from 'lucide-react';

const CollaborationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="collaboration" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 gradient-ethereal" />
      
      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-magical-gold to-mystic-purple magical-glow mb-8 animate-glow-pulse">
          <Handshake className="w-10 h-10 text-foreground" />
        </div>
        
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 cinematic-text">
          {t('collaboration.headline')}
        </h2>
        
        <p className="text-lg text-foreground/80 leading-relaxed mb-10 max-w-3xl mx-auto">
          {t('collaboration.text')}
        </p>
        
        <Button size="lg" className="magical-glow text-lg px-8 py-6">
          {t('collaboration.cta')}
        </Button>
        
        {/* Lottie placeholder - glowing handshake or intertwining light */}
        <div className="mt-12 h-32 flex items-center justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-magical-gold to-transparent animate-shimmer" 
               style={{ backgroundSize: '200% 100%' }} />
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
