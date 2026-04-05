import { motion } from "framer-motion";

const LoveMessageSection = () => {
  const messages = [
    {
      id: "01",
      quote: "You are the reason my world is painted in the most beautiful colors.",
      sub: "Every moment with you is a masterpiece.",
      rotate: "-rotate-2",
    },
    {
      id: "02",
      quote: "In a universe of billions, my heart chose you—and it would choose you again.",
      sub: "Without hesitation. Every single time.",
      rotate: "rotate-2",
    },
    {
      id: "03",
      quote: "It's the way you find magic in the ordinary that made me fall for you.",
      sub: "You make the simplest moments feel like a dream.",
      rotate: "-rotate-1",
    },
    {
      id: "04",
      quote: "You don't just make me happy. You make me believe that this kind of happiness actually exists.",
      sub: "And that I deserve it, because of you.",
      rotate: "rotate-3",
    },
    {
      id: "05",
      quote: "I look at you and I see everything I’ve ever wanted right in front of me.",
      sub: "My home, my peace, and my greatest adventure.",
      rotate: "-rotate-2",
    },
    {
      id: "06",
      quote: "Thank you for being my person, my best friend, and my forever love.",
      sub: "Today, tomorrow, and every chapter after this.",
      rotate: "rotate-1",
    },
  ];

  return (
    <section className="relative w-full bg-[#fffbfb] py-32 md:py-48 overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[50vw] h-[50vw] bg-rose-50/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-pink-50/60 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="w-px h-20 bg-rose-200 mx-auto mb-8" />
          <p className="font-body text-[10px] tracking-[0.5em] uppercase text-rose-400 mb-4 font-bold">
            Dear Nitya
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-rose-950">
            A Million Reasons <br/> <span className="italic text-rose-500 font-light text-3xl md:text-4xl">To Love You</span>
          </h2>
        </motion.div>

        {/* Timeline Center Line */}
        <div className="absolute top-[400px] bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-rose-100 via-rose-200 to-transparent hidden md:block" />

        <div className="space-y-32 md:space-y-48 relative">
          {messages.map((msg, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-center w-full ${
                  isEven ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className={`w-full md:w-[46%] relative group`}>
                  
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 bg-rose-200/10 blur-2xl rounded-[2rem] group-hover:bg-rose-200/20 transition-all duration-700" />
                  
                  <div className={`relative bg-white/40 backdrop-blur-sm border border-white/60 p-10 md:p-14 rounded-[2rem] shadow-sm ${msg.rotate} group-hover:rotate-0 transition-all duration-500`}>
                    
                    <span className="absolute top-6 right-8 font-display text-4xl text-rose-100 font-bold group-hover:text-rose-200 transition-colors">
                      {msg.id}
                    </span>

                    <p className="font-letter text-2xl md:text-3xl italic text-rose-900 leading-[1.6] mb-8 pr-4">
                      "{msg.quote}"
                    </p>

                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-[1px] bg-rose-300" />
                        <p className="font-body text-[11px] tracking-widest uppercase text-rose-500/80 font-semibold">
                        {msg.sub}
                        </p>
                    </div>
                  </div>

                  {/* Aesthetic Connector Dot */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-rose-300 border-4 border-white shadow-sm ${
                    isEven ? "right-[-10.5%]" : "left-[-10.5%]"
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LoveMessageSection;