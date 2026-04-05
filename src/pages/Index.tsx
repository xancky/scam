import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import LoginPage from "@/components/birthday/Login";
import HeroSection from "@/components/birthday/HeroSection";
import LoveMessageSection from "@/components/birthday/LoveMessageSection";
import PhotoGallerySection from "@/components/birthday/PhotoGallerySection";
import LetterSection from "@/components/birthday/LetterSection";
import GiftSection from "@/components/birthday/GiftSection";
import FooterSection from "@/components/birthday/FooterSection";

const Index = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 font-sans text-slate-800">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <LoginPage onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <HeroSection />
            <LoveMessageSection />
            <PhotoGallerySection />
            <LetterSection />
            <GiftSection />
            <FooterSection />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;