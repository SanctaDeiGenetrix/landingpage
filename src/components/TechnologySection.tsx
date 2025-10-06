import { useLanguage } from "@/contexts/LanguageContext";
import Lottie from "lottie-react";
// import { Lightbulb, Projector, Waves, BookOpen } from 'lucide-react';

// const technologies = [
//   { key: 'storytelling', icon: BookOpen },
//   { key: 'light', icon: Lightbulb },
//   { key: 'projection', icon: Projector },
//   { key: 'scent', icon: Waves },
// ];

import storytellingAnim from "@/assets/lottie/pen_draw.json";
import lightAnim from "@/assets/lottie/light_effect.json";
import projectionAnim from "@/assets/lottie/scene.json";
import scentAnim from "@/assets/lottie/developer.json";

const technologies = [
  { key: "storytelling", animation: storytellingAnim },
  { key: "light", animation: lightAnim },
  { key: "projection", animation: projectionAnim },
  { key: "scent", animation: scentAnim },
];

const TechnologySection = () => {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-cinzel text-3xl md:text-4xl font-bold text-center mb-16 cinematic-text">
          {t("technology.headline")}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={tech.key} className="text-center group">
              <div className="relative mb-6 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-deep-blue to-mystic-purple flex items-center justify-center overflow-hidden group-hover:magical-glow transition-all duration-500 group-hover:scale-110">
                  {tech.key === "projection" ? (
                    <Lottie
                      animationData={tech.animation}
                      loop
                      autoplay
                      className="w-[180px] h-[180px] bottom-10 relative"
                    />
                  ) : tech.key == "scent" ? (
                    <Lottie
                      animationData={tech.animation}
                      loop
                      autoplay
                      className="w-22 h-22"
                    />
                  ) : (
                    <Lottie
                      animationData={tech.animation}
                      loop
                      autoplay
                      className="w-15 h-15"
                    />
                  )}
                </div>

                {/* connection line */}
                {index < technologies.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(100%+1rem)] w-8 h-0.5 bg-gradient-to-r from-magical-gold to-mystic-purple" />
                )}
              </div>

              <h3 className="font-cinzel text-xl font-bold mb-2">
                {t(`technology.${tech.key}`)}
              </h3>
            </div>
          ))}
        </div>

        {/* Animated connection visualization */}
        <div className="mt-16 flex justify-center">
          <svg width="100%" height="100" className="max-w-4xl">
            <defs>
              <linearGradient
                id="techGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="hsl(45, 65%, 53%)" />
                <stop offset="50%" stopColor="hsl(261, 30%, 41%)" />
                <stop offset="100%" stopColor="hsl(45, 65%, 53%)" />
              </linearGradient>
            </defs>
            <path
              d="M 50 50 Q 250 10, 450 50 T 850 50"
              stroke="url(#techGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-shimmer"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
