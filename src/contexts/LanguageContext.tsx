import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pt' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'header.experience': 'Experiences',
    'header.collaboration': 'Collaboration',
    'header.technology': 'Technology',
    'header.contact': 'Contact',
    
    // Hero
    'hero.headline': 'Designing emotions, not decorations.',
    'hero.subheadline': 'Genetrix transforms events into portals of emotion.',
    'hero.cta': 'See Our Experiences',
    
    // About
    'about.headline': 'Where stories come alive.',
    'about.text': 'We are magicians of the modern age. Genetrix blends art, technology, and emotion to create experiences that transcend the ordinary. Every event becomes a canvas where light dances, scents evoke memories, and stories unfold in ways never imagined.',
    
    // Experiences
    'experiences.headline': 'Immersive Scenarios',
    'experiences.tunnel.title': 'Memory Tunnel',
    'experiences.tunnel.desc': 'Walk through time as projections bring cherished moments to life around you.',
    'experiences.path.title': 'Love Path',
    'experiences.path.desc': 'A glowing journey illuminating the story of two souls intertwined.',
    'experiences.wall.title': 'Legacy Wall',
    'experiences.wall.desc': 'Interactive display where guests leave messages that bloom into light.',
    'experiences.toast.title': 'Immersive Toast',
    'experiences.toast.desc': 'Synchronized light and sound that turns a simple moment into pure magic.',
    
    // Collaboration
    'collaboration.headline': 'Creative Partnerships',
    'collaboration.text': 'We work hand-in-hand with decorators, event planners, and brands to elevate their vision. Together, we don\'t just design events—we craft emotional journeys that guests will treasure forever.',
    'collaboration.cta': 'Become a Creative Partner',
    
    // Technology
    'technology.headline': 'Where creativity meets intelligent technology',
    'technology.storytelling': 'Emotional Storytelling',
    'technology.light': 'Dynamic Lighting',
    'technology.projection': 'Projection Mapping',
    'technology.scent': 'Sensory Design',
    
    // Gallery
    'gallery.headline': 'Moments We\'ve Created',
    
    // Contact
    'contact.headline': 'Let\'s craft your story.',
    'contact.text': 'Every great experience begins with a conversation. Tell us about your vision, and let\'s create something unforgettable together.',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.message': 'Tell us about your event',
    'contact.send': 'Start the Magic',
    
    // Footer
    'footer.tagline': 'We don\'t create events. We create moments people never forget.',
  },
  pt: {
    // Header
    'header.experience': 'Experiências',
    'header.collaboration': 'Colaboração',
    'header.technology': 'Tecnologia',
    'header.contact': 'Contato',
    
    // Hero
    'hero.headline': 'Desenhando emoções, não decorações.',
    'hero.subheadline': 'Genetrix transforma eventos em portais de emoção.',
    'hero.cta': 'Ver Experiências',
    
    // About
    'about.headline': 'Onde histórias ganham vida.',
    'about.text': 'Somos mágicos da era moderna. A Genetrix une arte, tecnologia e emoção para criar experiências que transcendem o ordinário. Cada evento se torna uma tela onde a luz dança, aromas evocam memórias e histórias se desdobram de formas nunca imaginadas.',
    
    // Experiences
    'experiences.headline': 'Cenários Imersivos',
    'experiences.tunnel.title': 'Túnel da Memória',
    'experiences.tunnel.desc': 'Caminhe no tempo enquanto projeções trazem momentos preciosos à vida ao seu redor.',
    'experiences.path.title': 'Caminho do Amor',
    'experiences.path.desc': 'Uma jornada luminosa iluminando a história de duas almas entrelaçadas.',
    'experiences.wall.title': 'Muro do Legado',
    'experiences.wall.desc': 'Display interativo onde convidados deixam mensagens que florescem em luz.',
    'experiences.toast.title': 'Brinde Imersivo',
    'experiences.toast.desc': 'Luz e som sincronizados que transformam um simples momento em pura magia.',
    
    // Collaboration
    'collaboration.headline': 'Parcerias Criativas',
    'collaboration.text': 'Trabalhamos lado a lado com decoradores, planejadores de eventos e marcas para elevar sua visão. Juntos, não apenas desenhamos eventos—criamos jornadas emocionais que os convidados guardarão para sempre.',
    'collaboration.cta': 'Seja um Parceiro Criativo',
    
    // Technology
    'technology.headline': 'Onde criatividade encontra tecnologia inteligente',
    'technology.storytelling': 'Narrativa Emocional',
    'technology.light': 'Iluminação Dinâmica',
    'technology.projection': 'Projeção Mapeada',
    'technology.scent': 'Design Sensorial',
    
    // Gallery
    'gallery.headline': 'Momentos que Criamos',
    
    // Contact
    'contact.headline': 'Vamos criar sua história.',
    'contact.text': 'Toda grande experiência começa com uma conversa. Conte-nos sobre sua visão e vamos criar algo inesquecível juntos.',
    'contact.name': 'Seu Nome',
    'contact.email': 'Endereço de Email',
    'contact.message': 'Conte sobre seu evento',
    'contact.send': 'Iniciar a Magia',
    
    // Footer
    'footer.tagline': 'Não criamos eventos. Criamos momentos que as pessoas nunca esquecem.',
  },
  es: {
    // Header
    'header.experience': 'Experiencias',
    'header.collaboration': 'Colaboración',
    'header.technology': 'Tecnología',
    'header.contact': 'Contacto',
    
    // Hero
    'hero.headline': 'Diseñando emociones, no decoraciones.',
    'hero.subheadline': 'Genetrix transforma eventos en portales de emoción.',
    'hero.cta': 'Ver Experiencias',
    
    // About
    'about.headline': 'Donde las historias cobran vida.',
    'about.text': 'Somos magos de la era moderna. Genetrix fusiona arte, tecnología y emoción para crear experiencias que trascienden lo ordinario. Cada evento se convierte en un lienzo donde la luz baila, los aromas evocan memorias y las historias se despliegan de formas nunca imaginadas.',
    
    // Experiences
    'experiences.headline': 'Escenarios Inmersivos',
    'experiences.tunnel.title': 'Túnel de la Memoria',
    'experiences.tunnel.desc': 'Camina a través del tiempo mientras proyecciones dan vida a momentos preciados a tu alrededor.',
    'experiences.path.title': 'Camino del Amor',
    'experiences.path.desc': 'Un viaje luminoso que ilumina la historia de dos almas entrelazadas.',
    'experiences.wall.title': 'Muro del Legado',
    'experiences.wall.desc': 'Pantalla interactiva donde los invitados dejan mensajes que florecen en luz.',
    'experiences.toast.title': 'Brindis Inmersivo',
    'experiences.toast.desc': 'Luz y sonido sincronizados que convierten un simple momento en pura magia.',
    
    // Collaboration
    'collaboration.headline': 'Alianzas Creativas',
    'collaboration.text': 'Trabajamos mano a mano con decoradores, planificadores de eventos y marcas para elevar su visión. Juntos, no solo diseñamos eventos—creamos viajes emocionales que los invitados atesorarán para siempre.',
    'collaboration.cta': 'Conviértete en un Socio Creativo',
    
    // Technology
    'technology.headline': 'Donde la creatividad encuentra la tecnología inteligente',
    'technology.storytelling': 'Narrativa Emocional',
    'technology.light': 'Iluminación Dinámica',
    'technology.projection': 'Proyección Mapeada',
    'technology.scent': 'Diseño Sensorial',
    
    // Gallery
    'gallery.headline': 'Momentos que Hemos Creado',
    
    // Contact
    'contact.headline': 'Creemos tu historia.',
    'contact.text': 'Toda gran experiencia comienza con una conversación. Cuéntanos sobre tu visión y creemos algo inolvidable juntos.',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Cuéntanos sobre tu evento',
    'contact.send': 'Comenzar la Magia',
    
    // Footer
    'footer.tagline': 'No creamos eventos. Creamos momentos que la gente nunca olvida.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
