import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import cuteCharacter from "@/assets/cute-character.png";

const LoveMessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const messages = [
    {
      quote: "You are the reason my world is painted in the most beautiful colors.",
      sub: "Every moment with you is a masterpiece.",
    },
    {
      quote: "In a universe of billions, my heart chose you — and it would choose you again, every single time.",
      sub: "Without hesitation, without doubt.",
    },
    {
      quote: "You don't just make me happy. You make me believe that this kind of happiness actually exists.",
      sub: "And that I deserve it, because of you.",
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-36 px-6 bg-gradient-section relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Words from my heart
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Why You Mean <span className="italic text-primary">Everything</span>
          </h2>
        </motion.div>

        <div className="space-y-20">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="relative"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "items-start text-left" : "items-end text-right"} max-w-2xl ${i % 2 === 0 ? "" : "ml-auto"}`}>
                <span className="text-6xl text-primary/20 font-display leading-none mb-2">"</span>
                <p className="font-letter text-2xl md:text-3xl italic text-foreground/90 leading-relaxed mb-3">
                  {msg.quote}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {msg.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cute character */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.img
            src={cuteCharacter}
            alt="Cute bunny with a heart balloon"
            className="w-28 md:w-36 opacity-80"
            width={512}
            height={512}
            loading="lazy"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LoveMessageSection;
