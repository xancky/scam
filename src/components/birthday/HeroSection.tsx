import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "@/assets/hero.png";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const holdTimeout = useRef(null);

  // Time required to hold the button (in milliseconds)
  const HOLD_DURATION = 2000; 

  const startHold = () => {
    setIsHolding(true);
    // Start the timer when she presses down
    holdTimeout.current = setTimeout(() => {
      setIsUnlocked(true);
    }, HOLD_DURATION);
  };

  const cancelHold = () => {
    setIsHolding(false);
    // Cancel the timer if she lets go too early
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      <AnimatePresence mode="wait">
        {/* =========================================
            PHASE 1: THE LOCK SCREEN (DARK & MOODY)
            ========================================= */}
        {!isUnlocked ? (
          <motion.div
            key="lock-screen"
            className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }} // Slow fade out
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/50 text-sm tracking-widest uppercase mb-12 font-body"
            >
              A gift for Miss Nitya
            </motion.p>

            <motion.button
              onPointerDown={startHold}
              onPointerUp={cancelHold}
              onPointerLeave={cancelHold}
              // touch-none prevents mobile scrolling while holding
              className="relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white/80 backdrop-blur-sm transition-colors touch-none cursor-pointer"
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 text-sm tracking-widest font-light">
                Press and Hold to Open
              </span>

              {/* The visual "fill" effect while holding */}
              <motion.div
                className="absolute inset-0 bg-white/20 z-0"
                initial={{ width: "0%" }}
                animate={{ width: isHolding ? "100%" : "0%" }}
                transition={{ 
                  duration: isHolding ? HOLD_DURATION / 1000 : 0.3, 
                  ease: "linear" 
                }}
              />
            </motion.button>
          </motion.div>
        ) : (
          /* =========================================
             PHASE 2: THE MAIN HERO (THE REVEAL)
             ========================================= */
          <motion.div
            key="main-hero"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }} // 3-second slow fade in!
          >
            <div className="absolute inset-0">
              <img
                src={heroBg}
                alt="Dreamy background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/40" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.4, ease: "easeOut" }} // Delayed slightly so background fades first
              >
                <motion.p
                  className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1.2 }}
                >
                  A celebration of you
                </motion.p>

                <div className="py-6">
                  <motion.h1
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-8 text-gradient-rose py-4"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Chapter 19
                  </motion.h1>
                </div>

                <motion.p
                  className="font-letter text-xl md:text-2xl italic text-foreground/70 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 1.2 }}
                >
                  <Typewriter
                    words={["A completely new era.", "And I am so lucky to be a part of it ❤️"]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={30}
                    delaySpeed={4500}
                  />
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 3.5, duration: 1 }}
                  className="flex justify-center"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    className="text-muted-foreground text-lg"
                  >
                    ↓
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;