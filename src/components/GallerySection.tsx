import { useLanguage } from '@/contexts/LanguageContext';

const GallerySection = () => {
  const { t } = useLanguage();

  // Placeholder gallery items
  const galleryItems = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-midnight to-deep-blue">
      <div className="container mx-auto max-w-7xl">
        <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center mb-16 cinematic-text">
          {t('gallery.headline')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={item}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple via-deep-blue to-midnight group-hover:scale-110 transition-transform duration-700" />
              
              {/* Overlay glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-magical-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Placeholder for actual images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-2 border-magical-gold/30 rounded-full group-hover:border-magical-gold group-hover:magical-glow transition-all duration-500" />
              </div>
              
              {/* Lottie particles overlay would go here */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
