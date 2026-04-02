import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-40 px-6 bg-gradient-section">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">
            Written just for you
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            A Letter From <span className="italic text-primary">My Heart</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-paper rounded-sm p-10 md:p-16 shadow-romantic relative"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                transparent,
                transparent 31px,
                hsl(345 15% 75% / 0.12) 31px,
                hsl(345 15% 75% / 0.12) 32px
              )
            `,
            backgroundPosition: "0 40px",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="absolute top-0 bottom-0 left-16 md:left-20 w-px bg-primary/10" />

          <div className="pl-6 md:pl-10">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="font-letter text-2xl md:text-3xl italic text-burgundy mb-10"
            >
              My Dearest,
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="font-letter text-lg md:text-xl leading-[2] text-burgundy/80 space-y-7"
            >
              <p>
                On this beautiful day, the world became a little more magical because you were born into it. 
                I want you to know that you are the most extraordinary thing that has ever happened to me — 
                not just in the grand, sweeping moments, but in the quiet ones too. In the way you laugh 
                when you think no one is watching. In the way you care so deeply about the people you love. 
                In the way you make even ordinary days feel like something worth remembering.
              </p>

              <p>
                Every day I spend with you teaches me something new about love — that it isn't just a feeling, 
                but a choice I make every morning when I wake up and think of you. It's in the small things: 
                your voice when you're tired, the way your eyes light up when you're excited, the warmth of 
                your presence even when we're miles apart.
              </p>

              <p>
                You deserve the world and every beautiful thing in it. I may not be able to give you the stars, 
                but I promise to spend every day making sure you know how deeply, truly, and endlessly you are loved.
              </p>

              <p>
                Happy Birthday, my love. Today is yours — and so is my heart. Forever.
              </p>

              <p className="text-right pt-6">
                <span className="font-display text-lg italic text-primary">
                  — With all my love, always
                </span>
              </p>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default LetterSection;
