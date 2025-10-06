import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import CollaborationSection from "@/components/CollaborationSection";
import TechnologySection from "@/components/TechnologySection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-midnight text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperiencesSection />
          <CallToAction />
          <CollaborationSection />
          <TechnologySection />
          {/* <GallerySection /> */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
