import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section ref={ref} className="py-28 md:py-40 px-6 bg-gradient-section relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-5">
            Words from my heart
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Why You Mean <span className="italic text-primary">Everything</span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.25 }}
              className="relative"
            >
              <div className={`flex flex-col ${i % 2 === 0 ? "items-start text-left" : "items-end text-right"} max-w-2xl ${i % 2 === 0 ? "" : "ml-auto"}`}>
                <div className="w-8 h-px bg-primary/30 mb-6" />
                <p className="font-letter text-2xl md:text-3xl italic text-foreground/85 leading-relaxed mb-4">
                  "{msg.quote}"
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {msg.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveMessageSection;
