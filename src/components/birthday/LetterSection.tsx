import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// DO NOT CHANGE: Your exact personal letter
const letterParagraphs = [
  "Pata hai… kuch log life me aise aate hain jo sab kuch change kar dete hain — aur aap mere liye wahi hain. Aapse milne ke baad life bas chal nahi rahi… genuinely feel ho rahi hai.",
  "Aapki har chhoti cheez mujhe yaad rehti hai — aapki woh cute si weird laugh, bina baat ke thoda gussa hona, nakhre dikhana… aur sach bolu toh, mujhe aapke nakhre uthana bohot pasand hai. Aur sabse zyada, aapka woh caring nature… jo shayad aap khud bhi realize nahi karti. Aap itni pure hain na… ki kabhi kabhi lagta hai duniya aap jaisi ho jaaye toh sab kitna simple ho jaaye.",
  "Main perfect nahi hoon, kabhi kabhi galtiyan karta hoon… par ek cheez kabhi change nahi hogi — aapki value meri life me. I swear, jitna main aapse pyaar karta hoon na, shayad kisi aur ko kabhi waise na kar paun. Aap mere liye sirf “important” nahi hain… aap meri habit hain, meri peace hain, aur honestly, meri biggest weakness bhi.",
  "Jab aap khush hoti hain na, mujhe andar se ek alag hi sukoon milta hai. Aur jab aap thodi si bhi upset hoti hain, bas dimaag me yahi chalta rehta hai — kya karu ki aap theek ho jaayein, kaise aapko better feel karaun. Itna impact hai aapka mujhpe.",
  "Main shayad aapke liye perfect nahi hoon… par ek promise hai — main har din aapke liye better banne ki koshish karunga, aur hamesha aapke saath rahunga. Touchwood, koi bhi ladki aapke aage compete nahi kar sakti. Mujhe aapko aur samajhna hai, aapse aur seekhna hai.",
  "Sach me, sirf mera mind nahi… aap meri poori personality takeover kar rahi hain. Mera attitude, mere reactions, mera side-eye… sab aap jaisa hota ja raha hai — aur mujhe yeh bhi pasand hai.",
  "Aaj ka din sirf aapka hai… aur honestly, meri har dua me sirf aap hain Happy Birthday, meri favourite person. Stay the same… kyunki aap jaisi hain, mere liye waise hi perfect hain ✨"
];

const LetterSection = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl) {
      const handleEnded = () => setIsPlaying(false);
      audioEl.addEventListener("ended", handleEnded);
      return () => audioEl.removeEventListener("ended", handleEnded);
    }
  }, []);

  return (
    <section className="py-28 md:py-40 px-6 bg-[#fffbfb] relative overflow-hidden font-sans flex flex-col items-center justify-center min-h-screen">
      
      <audio ref={audioRef} src="/bairan.mp3" preload="auto" />

      <AnimatePresence mode="wait">
        
        {/* =========================================
            STATE 1: THE PERFECT SEALED ENVELOPE
            ========================================= */}
        {!isOpened ? (
          <motion.div
            key="sealed"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.6 } }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-20 flex flex-col items-center cursor-pointer group"
            onClick={() => setIsOpened(true)}
          >
            <div className="relative w-[340px] h-[220px] rounded-xl overflow-visible transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl shadow-xl shadow-rose-950/5">
              
              <div className="absolute inset-0 bg-[#faf8f5] rounded-xl border border-rose-100" />
              
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 220 L170 120 L340 220 Z" fill="#f4f0e6" stroke="#fce7f3" strokeWidth="1"/>
                <path d="M0 0 L150 110 L0 220 Z" fill="#fdfbf7" stroke="#fce7f3" strokeWidth="1"/>
                <path d="M340 0 L190 110 L340 220 Z" fill="#fdfbf7" stroke="#fce7f3" strokeWidth="1"/>
                <path d="M0 0 L170 120 L340 0 Z" fill="#ffffff" stroke="#fce7f3" strokeWidth="1"/>
                <path d="M0 0 L170 120 L340 0" stroke="rgba(2fb,113,133,0.1)" strokeWidth="4" filter="blur(2px)"/>
              </svg>

              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute w-16 h-16 rounded-full flex items-center justify-center shadow-md border-[3px] border-rose-500/80 bg-rose-500"
                style={{ left: "calc(50% - 32px)", top: "calc(120px - 32px)" }}
              >
                <div className="absolute inset-0 rounded-full bg-rose-400/50 animate-ping opacity-60" />
                <span className="relative z-10 text-white text-3xl font-serif italic pr-1">N</span>
              </motion.div>
            </div>

            <motion.p
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="mt-14 text-rose-400 tracking-[0.3em] text-[11px] uppercase font-body font-bold"
            >
              Tap to break the seal
            </motion.p>
          </motion.div>
        ) : (
          
          /* =========================================
             STATE 2: THE ELEGANT BLANK LETTER
             ========================================= */
          <motion.div
            key="opened"
            initial={{ opacity: 0, scaleY: 0.1, originY: 0 }} 
            animate={{ opacity: 1, scaleY: 1, originY: 0 }} 
            transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} 
            className="max-w-3xl mx-auto relative z-10 w-full"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-center mb-16"
            >
              <p className="font-body text-xs tracking-[0.4em] uppercase text-rose-400 mb-5 font-medium">
                Written just for you
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-medium text-rose-950 mb-10">
                A Letter From <span className="italic text-rose-500 font-light">My Heart</span>
              </h2>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleAudio}
                className={`mx-auto flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                  isPlaying 
                    ? "bg-rose-100 border-rose-200 text-rose-700 shadow-inner" 
                    : "bg-white border-rose-100 text-rose-400 hover:border-rose-200 shadow-sm"
                }`}
              >
                <div className="w-6 h-6 flex items-center justify-center bg-rose-500 text-white rounded-full">
                  {isPlaying ? (
                    <span className="w-2 h-2 bg-white rounded-sm animate-pulse" />
                  ) : (
                    <span className="ml-[2px] w-0 h-0 border-t-4 border-t-transparent border-l-[6px] border-l-white border-b-4 border-b-transparent" />
                  )}
                </div>
                <span className="font-body text-xs tracking-[0.2em] uppercase font-semibold">
                  {isPlaying ? "Playing..." : "Play background audio"}
                </span>
              </motion.button>
            </motion.div>

            {/* THE PAPER - Removed the pink repeating gradient lines */}
            <div
              className="bg-[#fdfbf7] rounded-md relative shadow-2xl shadow-rose-900/5 mx-auto w-full border border-rose-100 overflow-hidden py-16"
            >
              {/* Very Subtle Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none" 
                   style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }} />

              {/* Red Margins (kept for the aesthetic) */}
              <div className="absolute top-0 bottom-0 left-12 md:left-16 w-[1.5px] bg-rose-300/50" />
              <div className="absolute top-0 bottom-0 left-[52px] md:left-[68px] w-[0.5px] bg-rose-300/30" />

              {/* Text Container with clean layout */}
              <div className="pl-[80px] md:pl-[96px] pr-8 md:pr-16 relative z-10">
                
                {/* Salutation */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="font-letter text-3xl md:text-4xl italic text-rose-900 mb-8"
                >
                  My Malkin,
                </motion.h3>

                {/* Letter Body - Clean spacing, no forced line heights */}
                <div className="font-letter text-[17px] md:text-[19px] text-rose-950/80 tracking-wide leading-loose space-y-8">
                  {letterParagraphs.map((para, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      {para}
                    </motion.p>
                  ))}
                </div>

                {/* Sign-off */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }}
                  viewport={{ once: true }}
                  className="text-right pt-12"
                >
                  <span className="font-display text-xl md:text-2xl italic text-rose-500 block mb-1">
                    — With all my love, always
                  </span>
                  <span className="font-display text-2xl md:text-3xl font-bold text-rose-800 block">
                    YOUR STUPID
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LetterSection;