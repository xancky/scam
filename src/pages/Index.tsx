import HeroSection from "@/components/birthday/HeroSection";
import LoveMessageSection from "@/components/birthday/LoveMessageSection";
import PhotoGallerySection from "@/components/birthday/PhotoGallerySection";
import LetterSection from "@/components/birthday/LetterSection";
import GiftSection from "@/components/birthday/GiftSection";
import FooterSection from "@/components/birthday/FooterSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <LoveMessageSection />
      <PhotoGallerySection />
      <LetterSection />
      <GiftSection />
      <FooterSection />
    </main>
  );
};

export default Index;
