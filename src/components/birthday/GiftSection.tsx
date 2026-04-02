import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";

const GiftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpened) return;
    setIsOpened(true);

    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#d4789c", "#e8a0b8", "#c9a96e", "#f0d0e0", "#f5e6d3"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, [isOpened]);

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            One more thing...
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-12">
            A Little <span className="italic text-primary">Surprise</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.button
                key="gift"
                onClick={handleOpen}
                className="relative group cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                exit={{ scale: 0, opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.5 }}
              >
                {/* Gift box */}
                <div className="w-40 h-40 md:w-52 md:h-52 relative">
                  {/* Box body */}
                  <div className="absolute bottom-0 w-full h-3/4 rounded-lg bg-gradient-to-br from-primary/80 to-accent shadow-romantic" />
                  {/* Lid */}
                  <motion.div
                    className="absolute top-[15%] -left-2 -right-2 h-1/4 rounded-lg bg-gradient-to-r from-primary to-accent shadow-soft"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                  {/* Ribbon vertical */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-0 w-3 bg-gold/60 rounded-full" />
                  {/* Ribbon horizontal */}
                  <div className="absolute top-[calc(15%+12.5%)] left-0 right-0 h-3 bg-gold/60 -translate-y-1/2" />
                  {/* Bow */}
                  <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-4xl">
                    🎀
                  </div>
                </div>

                <motion.p
                  className="font-body text-muted-foreground mt-6 text-sm"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  Tap to open your gift ✨
                </motion.p>
              </motion.button>
            ) : (
              <motion.div
                key="message"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
                  className="text-7xl md:text-8xl mb-8"
                >
                  🎂
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="font-display text-4xl md:text-6xl font-bold text-gradient-rose mb-6"
                >
                  Happy Birthday! ❤️
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="font-letter text-xl md:text-2xl italic text-foreground/80 max-w-md mx-auto"
                >
                  You are the most beautiful chapter of my life. 
                  Here's to another year of loving you endlessly.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-8 flex justify-center gap-3 text-3xl"
                >
                  {["💖", "🌹", "✨", "🌹", "💖"].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
