import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="py-24 px-6 bg-gradient-section">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="w-12 h-px bg-primary/25 mx-auto mb-8" />
        <p className="font-display text-xl md:text-2xl italic text-foreground/60">
          {/* Made with love, just for you. */}
        </p>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
