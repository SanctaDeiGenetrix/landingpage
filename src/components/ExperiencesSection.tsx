import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Film, Heart, MessageSquare, Sparkles } from 'lucide-react';

const experiences = [
  { 
    key: 'tunnel', 
    icon: Film,
    gradient: 'from-deep-blue to-mystic-purple'
  },
  { 
    key: 'path', 
    icon: Heart,
    gradient: 'from-mystic-purple to-pink-haze'
  },
  { 
    key: 'wall', 
    icon: MessageSquare,
    gradient: 'from-magical-gold to-mystic-purple'
  },
  { 
    key: 'toast', 
    icon: Sparkles,
    gradient: 'from-pink-haze to-magical-gold'
  },
];

const ExperiencesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experiences" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center mb-16 cinematic-text">
          {t('experiences.headline')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={exp.key}
                className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-border/50 bg-card/50 backdrop-blur overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-magical-gold to-mystic-purple flex items-center justify-center mb-4 group-hover:magical-glow transition-all">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <CardTitle className="font-cinzel text-xl">
                    {t(`experiences.${exp.key}.title`)}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-foreground/70">
                    {t(`experiences.${exp.key}.desc`)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
