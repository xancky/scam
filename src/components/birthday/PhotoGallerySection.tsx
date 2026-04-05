import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Update these imports with your actual assets
import gallery1 from "@/assets/beach.jpeg";
import gallery2 from "@/assets/Flowers.jpeg";
import gallery3 from "@/assets/traditional.jpeg";
import gallery4 from "@/assets/nightsky.jpeg";
import gallery5 from "@/assets/dance.jpeg"; 
import gallery6 from "@/assets/Her.jpeg";

const photos = [
  { 
    id: 1, src: gallery1, alt: "Sunset together", 
    caption: "Sunset together", 
    note: "Where every sunset reminds me of you. We stayed here until the stars came out.",
    rotate: "-rotate-6", top: "5%", left: "5%", speed: 1.2 
  },
  { 
    id: 2, src: gallery5, alt: "The Dancer", 
    caption: "The Dancer", 
    note: "The way you danced… it didn’t just look beautiful, it felt like a moment I never wanted to end.",
    rotate: "rotate-3", top: "15%", left: "55%", speed: 0.8 
  },
  { 
    id: 3, src: gallery3, alt: "Holding hands", 
    caption: "Safe place", 
    note: "My favorite place to be. Your hand fits perfectly in mine.",
    rotate: "-rotate-3", top: "35%", left: "15%", speed: 1.5 
  },
  { 
    id: 4, src: gallery6, alt: "That Smile", 
    caption: "That Smile", 
    note: "The exact moment I knew I was completely in love with you.",
    rotate: "rotate-6", top: "50%", left: "60%", speed: 0.9 
  },
  { 
    id: 5, src: gallery4, 
    caption: "Midnight", 
    note: "You and me, beneath the infinite. I couldn't stop looking at you.",
    rotate: "-rotate-2", top: "70%", left: "10%", speed: 1.3 
  },
  { 
    id: 6, src: gallery2, 
    caption: "Forever", 
    note: "Here is to a million more memories just like this one.",
    rotate: "rotate-2", top: "85%", left: "50%", speed: 0.7 
  },
];

// ==========================================
// 1. INDIVIDUAL POLAROID COMPONENT
// ==========================================
const Polaroid = ({ photo, scrollYProgress }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Parallax Logic: The Y-axis movement is multiplied by the photo's unique 'speed' property
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * photo.speed]);

  return (
    <motion.div
      style={{ y, top: photo.top, left: photo.left }}
      // THE FIX: Uses dynamic position (absolute for desktop, relative for mobile)
      className={`${photo.position || 'absolute'} w-[280px] md:w-[320px] lg:w-[350px] aspect-[3/4] ${photo.rotate} cursor-pointer group z-10 hover:z-50`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* 3D Flip Container */}
      <div 
        className={`relative w-full h-full transition-all duration-700 ease-in-out shadow-xl shadow-rose-950/10 rounded-sm
        [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover:scale-105'}`}
      >
        
        {/* ==================== FRONT OF POLAROID ==================== */}
        <div className="absolute inset-0 bg-white p-4 pb-16 md:pb-20 [backface-visibility:hidden] flex flex-col border border-neutral-100">
          <div className="w-full flex-grow relative overflow-hidden bg-rose-50">
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
            />
          </div>
          
          {/* Caption & Hint */}
          <div className="absolute bottom-4 left-0 w-full flex flex-col items-center">
            <p className="font-letter text-lg md:text-xl italic text-rose-900">
              {photo.caption}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-rose-300 mt-1 flex items-center gap-1 opacity-60">
              Tap to flip
            </p>
          </div>
        </div>

        {/* ==================== BACK OF POLAROID (NOTE) ==================== */}
        <div className="absolute inset-0 bg-[#fdfbf7] p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center border border-rose-100 shadow-inner">
          {/* subtle paper line background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #fb7185 28px)' }} />
               
          <p className="font-letter text-xl md:text-2xl text-rose-950 leading-[1.6] text-center rotate-[-2deg]">
            "{photo.note}"
          </p>

          <p className="absolute bottom-6 right-6 font-display italic text-rose-400 text-sm">
            - Yours
          </p>
        </div>

      </div>
    </motion.div>
  );
};

// ==========================================
// 2. MAIN GALLERY SECTION
// ==========================================
const PhotoGallerySection = () => {
  const containerRef = useRef(null);

  // Track scroll over the entire tall section for the parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    // min-h-[250vh] gives plenty of room for 6 scattered photos to fit vertically
    <section ref={containerRef} className="relative w-full min-h-[250vh] bg-[#fffbfb] py-32 overflow-hidden">
      
      {/* Dreamy Background Blur */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[80vw] h-[80vw] bg-rose-50/50 rounded-full blur-[150px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Intro Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 pt-10"
        >
          <div className="w-px h-16 bg-rose-200 mx-auto mb-8" />
          <p className="font-body text-xs tracking-[0.4em] uppercase text-rose-400 mb-4">
            Our moments
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-rose-950">
            A life I see with <span className="italic text-rose-500 font-light">YOU</span>
          </h2>
          <p className="text-rose-400/60 text-xs tracking-widest uppercase mt-8 animate-pulse">
            Scroll & Tap
          </p>
        </motion.div>

        {/* ==========================================
            DESKTOP: The Scattered Polaroid Container 
            ========================================== */}
        <div className="relative w-full h-[200vh] hidden md:block mt-20">
          {photos.map((photo) => (
            <Polaroid key={`desktop-${photo.id}`} photo={photo} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* ==========================================
            MOBILE FALLBACK: Staggered list instead of scatter 
            ========================================== */}
        <div className="flex flex-col items-center gap-24 mt-20 md:hidden pb-32">
          {photos.map((photo, index) => (
            <motion.div 
              key={`mobile-${photo.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`${index % 2 === 0 ? 'ml-[-10%]' : 'mr-[-10%]'}`}
            >
              {/* THE FIX: position="relative" is passed here so mobile layouts don't collapse */}
              <Polaroid photo={{...photo, top: "auto", left: "auto", speed: 0.5, position: "relative"}} scrollYProgress={scrollYProgress} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotoGallerySection;