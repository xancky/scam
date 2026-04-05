import { motion } from "framer-motion";
import heroBg from "@/assets/hero.png";
import { Typewriter } from "react-simple-typewriter";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center ">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dreamy pink clouds"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <motion.p
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            A celebration of you
          </motion.p>

         <div className="py-6">
  <motion.h1
    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-8 text-gradient-rose py-4"
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    Happy Birthday
  </motion.h1>
</div>

         <motion.p
  className="font-letter text-xl md:text-2xl italic text-foreground/70 mb-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 1.2 }}
>
  <Typewriter
    words={["To the one who makes every day feel like a love story ❤️"]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={0}
    delaySpeed={1000}
  />
</motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
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
    </section>
  );
};

export default HeroSection;
