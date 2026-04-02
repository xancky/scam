import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-20 px-6 bg-gradient-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-display text-2xl md:text-3xl italic text-foreground/70 mb-4">
          Made with love, just for you.
        </p>
        <p className="text-primary text-3xl animate-pulse-soft">♥</p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
