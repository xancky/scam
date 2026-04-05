import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";
// Make sure this path is correct and Next.js is handling the static import
import gallery5 from "@/assets/dumbass.jpeg"; 

const GiftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  
  const [isOpened, setIsOpened] = useState(false);
  const [tapCount, setTapCount] = useState(0); // State for the 3-tap logic

  const handleTap = useCallback(() => {
    if (isOpened) return;

    if (tapCount < 2) {
      // Increment tap count and trigger the wiggle animation
      setTapCount((prev) => prev + 1);
    } else {
      // 3rd Tap! Open the box
      setIsOpened(true);

      // Confetti matching our rose/pink aesthetic
      const duration = 3000;
      const end = Date.now() + duration;
      const colors = ["#fda4af", "#f43f5e", "#ffe4e6", "#fecdd3"];

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors,
        });

        if (Date.now() < end) requestAnimationFrame(frame);
      };

      frame();
    }
  }, [isOpened, tapCount]);

  // Dynamic text based on how many times she tapped
  const getTapText = () => {
    if (tapCount === 0) return "Tap 3 times to unwrap";
    if (tapCount === 1) return "2 more taps...";
    if (tapCount === 2) return "Almost there...";
    return "";
  };

  return (
    <section ref={ref} className="pt-32 pb-16 px-6 relative overflow-hidden bg-[#fffbfb] min-h-screen flex flex-col justify-between font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-3xl max-h-3xl bg-rose-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center relative z-10 w-full flex-grow flex flex-col justify-center">

        <AnimatePresence mode="wait">
          {!isOpened ? (
            /* =========================================
               STATE 1: THE TEASE & THE BOX
               ========================================= */
            <motion.div
              key="closed"
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9 }}
                className="mb-16"
              >
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose-400 mb-5">
                  One Last Thing
                </p>
                <h2 className="font-letter text-3xl md:text-5xl font-medium text-rose-950 mb-6 leading-relaxed">
                  "I couldn't just give you a <br/>
                  <span className="italic text-rose-500">website...</span>"
                </h2>
              </motion.div>

              <motion.button
                onClick={handleTap}
                className="relative group cursor-pointer focus:outline-none"
                // The idle floating animation before she touches it
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                {/* Premium Gift Box Animation - Reacts to taps */}
                <motion.div 
                  key={tapCount} // Forces animation to re-run every time tapCount changes
                  initial={tapCount > 0 ? { rotate: -5, scale: 0.95 } : {}}
                  animate={tapCount > 0 ? { rotate: [0, -10, 10, -10, 10, 0], scale: 1 } : {}}
                  transition={{ duration: 0.4 }}
                  className="w-40 h-40 md:w-48 md:h-48 relative shadow-2xl shadow-rose-900/10 rounded-xl bg-white border border-rose-50 flex items-center justify-center overflow-hidden"
                >
                  
                  {/* Glowing background inside box */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Ribbon Vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 bg-rose-300 shadow-sm" />
                  {/* Ribbon Horizontal */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-6 bg-rose-300 shadow-sm" />
                  
                  {/* Bow Center */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-rose-400 rounded-sm rotate-45 shadow-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-rose-300 rounded-sm" />
                  </div>
                </motion.div>

                {/* Dynamic text that changes on every tap */}
                <motion.p
                  key={`text-${tapCount}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 font-body text-xs tracking-[0.3em] uppercase text-rose-400/80 font-semibold"
                >
                  {getTapText()}
                </motion.p>
              </motion.button>
            </motion.div>

          ) : (

            /* =========================================
               STATE 2: THE REVEAL & THE VOUCHER
               ========================================= */
            <motion.div
              key="opened"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center w-full"
            >
              
              {/* THE REAL GIFT VOUCHER */}
              <motion.div 
                initial={{ scale: 0.8, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="w-full max-w-md bg-white border-2 border-dashed border-rose-300 rounded-xl p-8 shadow-2xl shadow-rose-900/10 relative overflow-hidden mb-16"
              >
                {/* Decorative cutouts for ticket look */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#fffbfb] rounded-full border-r-2 border-dashed border-rose-300" />
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#fffbfb] rounded-full border-l-2 border-dashed border-rose-300" />

                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-rose-400 font-bold mb-2">
                  Admit One • VIP
                </p>
                <h3 className="font-display text-3xl md:text-4xl text-rose-950 mb-2">
                  A Perfect Date Night
                </h3>
                <p className="font-letter text-rose-600/80 italic mb-6">
                  Dinner, dessert, and all your nakhre fully accepted.
                </p>
                
                <div className="pt-6 border-t border-rose-100 flex justify-between items-center px-4">
                  <div className="text-left">
                    <p className="font-body text-[9px] uppercase tracking-widest text-rose-400">Date</p>
                    <p className="font-serif text-rose-950">Whenever you say</p>
                  </div>
                  <div className="text-right">
                    <p className="font-body text-[9px] uppercase tracking-widest text-rose-400">Paid by</p>
                    <p className="font-serif text-rose-950">Your Stupid</p>
                  </div>
                </div>
              </motion.div>

              {/* The Beautiful Image */}
              <motion.img
                src={gallery5 || gallery5} // Added fallback just in case Next.js handles your image import differently
                alt="Her"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-8 border-[4px] border-white shadow-[0_0_40px_rgba(2fb,113,133,0.15)]"
              />

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="font-display text-4xl md:text-5xl font-medium text-rose-950 mb-6"
              >
                Happy Birthday
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="font-letter text-lg md:text-xl italic text-rose-900/80 max-w-md leading-relaxed"
              >
                You came into my life quietly, but you became everything I never knew I needed. 
                Every moment with you feels softer, warmer, and more real. 
                I don’t just love you — I feel lucky to have you.
                <br/><br/>
                <span className="font-display text-rose-500 text-2xl font-semibold">I Love You ❤️</span>
              </motion.p>
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>

     {/* =========================================
          THE EVERGREEN FOOTER
          ========================================= */}
      <AnimatePresence>
        {isOpened && (
          <motion.footer
            initial={{ opacity: 0, y: 30 }} // Y-axis se upar aayega for a solid entrance
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }} // Faster & more confident
            className="w-full text-center mt-24 pt-12 pb-8"
          >
            {/* Elegant tiny divider instead of full width border */}
            <div className="w-16 h-[2px] bg-rose-300 mx-auto mb-8 rounded-full" />
            
            <p className="font-letter text-rose-950 italic text-xl md:text-2xl font-medium drop-shadow-sm">
              Here’s to this year, and every year after.
            </p>
            <p className="font-body text-xs md:text-sm tracking-[0.4em] uppercase text-rose-500 mt-6 font-bold">
              Yours, Gulaam
            </p>
          </motion.footer>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GiftSection;