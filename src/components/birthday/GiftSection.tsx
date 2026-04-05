import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import gallery5 from "@/assets/Her.jpeg";

const GiftSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    if (isOpened) return;
    setIsOpened(true);

    const duration = 2500;
    const end = Date.now() + duration;

    const colors = ["#f4a6c0", "#d4a0a0", "#e8d5c4"];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.8 },
        colors,
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.8 },
        colors,
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  }, [isOpened]);

  return (
    <section
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-2xl mx-auto text-center">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">
            One Last Moment
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-14">
            A Little <span className="italic text-primary">Surprise</span>
          </h2>
        </motion.div>

        {/* GIFT / MESSAGE */}
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
                <div className="w-40 h-40 md:w-48 md:h-48 relative">

                  {/* BOX */}
                  <div className="absolute bottom-0 w-full h-3/4 rounded-lg 
                  bg-gradient-to-br from-primary/80 to-accent/70 shadow-xl" />

                  {/* LID */}
                  <motion.div
                    className="absolute top-[15%] -left-2 -right-2 h-1/4 rounded-md 
                    bg-gradient-to-r from-primary/90 to-accent/80"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5 }}
                  />

                  {/* RIBBON */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[15%] bottom-0 w-2 bg-foreground/20 rounded" />
                  <div className="absolute top-[40%] left-0 right-0 h-2 bg-foreground/20" />

                </div>

                <motion.p
                  className="mt-6 text-sm text-muted-foreground"
                  animate={{ opacity: [0.4, 1, 0.4] }}
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
                className="flex flex-col items-center"
              >

                {/* IMAGE */}
                <motion.img
                  src={gallery5}
                  alt="Her"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-36 h-36 md:w-40 md:h-40 rounded-full object-cover mb-6
                  border border-primary/30
                  shadow-[0_0_60px_rgba(255,150,180,0.25)]"
                />

                {/* TITLE */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl font-semibold text-primary mb-6"
                >
                  Happy Birthday 
                </motion.h3>

                {/* MESSAGE */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="text-lg md:text-xl italic text-foreground/80 max-w-md leading-relaxed"
                >
                  You came into my life quietly,  
                  but you became everything I never knew I needed.  
                  Every moment with you feels softer, warmer, and more real.  
                  I don’t just love you — I feel lucky to have you.<br/>
                  I Love You ❤️
                </motion.p>

                {/* DIVIDER */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-10 w-16 h-px bg-primary/30"
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