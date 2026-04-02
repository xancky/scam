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

    const duration = 2500;
    const end = Date.now() + duration;
    const colors = ["#8b4a5e", "#c9a96e", "#d4a0a0", "#e8d5c4", "#a06070"];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 2,
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
    <section ref={ref} className="py-28 md:py-40 px-6 relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">
            One more thing
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-14">
            A Little <span className="italic text-primary">Surprise</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <AnimatePresence mode="wait">
            {!isOpened ? (
              <motion.button
                key="gift"
                onClick={handleOpen}
                className="relative group cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-36 h-36 md:w-48 md:h-48 relative">
                  <div className="absolute bottom-0 w-full h-3/4 rounded-md bg-gradient-to-br from-primary/70 to-accent/60 shadow-romantic" />
                  <motion.div
                    className="absolute top-[15%] -left-1.5 -right-1.5 h-1/4 rounded-md bg-gradient-to-r from-primary/80 to-accent/70 shadow-soft"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                  <div className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-0 w-2.5 bg-gold/40 rounded-full" />
                  <div className="absolute top-[calc(15%+12.5%)] left-0 right-0 h-2.5 bg-gold/40 -translate-y-1/2" />
                </div>

                <motion.p
                  className="font-body text-muted-foreground mt-8 text-sm tracking-wide"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  Tap to open
                </motion.p>
              </motion.button>
            ) : (
              <motion.div
                key="message"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="text-center"
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="font-display text-4xl md:text-6xl font-bold text-gradient-rose mb-8"
                >
                  Happy Birthday
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="font-letter text-xl md:text-2xl italic text-foreground/75 max-w-md mx-auto leading-relaxed"
                >
                  You are the most beautiful chapter of my life. 
                  Here's to another year of loving you endlessly.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-10 w-16 h-px bg-primary/30 mx-auto"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
