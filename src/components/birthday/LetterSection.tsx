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
              My Malkin,
            </motion.h3>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="font-letter text-lg md:text-xl leading-[2] text-burgundy/80 space-y-7"
            >
              <p>
  Pata hai… kuch log life me aise aate hain jo sab kuch change kar dete hain — aur aap mere liye wahi hain. 
  Aapse milne ke baad life bas chal nahi rahi… genuinely feel ho rahi hai.
</p>

<p>
  Aapki har chhoti cheez mujhe yaad rehti hai — aapki woh cute si weird laugh, bina baat ke thoda gussa hona, 
  nakhre dikhana… aur sach bolu toh, mujhe aapke nakhre uthana bohot pasand hai.  
  Aur sabse zyada, aapka woh caring nature… jo shayad aap khud bhi realize nahi karti. 
  Aap itni pure hain na… ki kabhi kabhi lagta hai duniya aap jaisi ho jaaye toh sab kitna simple ho jaaye.
</p>

<p>
  Main perfect nahi hoon, kabhi kabhi galtiyan karta hoon… par ek cheez kabhi change nahi hogi — 
  aapki value meri life me. I swear, jitna main aapse pyaar karta hoon na, shayad kisi aur ko kabhi waise 
  na kar paun. Aap mere liye sirf “important” nahi hain… aap meri habit hain, meri peace hain, aur honestly, 
  meri biggest weakness bhi.
</p>

<p>
  Jab aap khush hoti hain na, mujhe andar se ek alag hi sukoon milta hai. Aur jab aap thodi si bhi upset hoti hain, 
  bas dimaag me yahi chalta rehta hai — kya karu ki aap theek ho jaayein, kaise aapko better feel karaun. 
  Itna impact hai aapka mujhpe.
</p>

<p>
  Main shayad aapke liye perfect nahi hoon… par ek promise hai — main har din aapke liye better banne ki 
  koshish karunga, aur hamesha aapke saath rahunga. Touchwood, koi bhi ladki aapke aage compete nahi kar sakti. 
  Mujhe aapko aur samajhna hai, aapse aur seekhna hai.
</p>

<p>
  Sach me, sirf mera mind nahi… aap meri poori personality takeover kar rahi hain.  
  Mera attitude, mere reactions, mera side-eye… sab aap jaisa hota ja raha hai — aur mujhe yeh bhi pasand hai.
</p>

<p>
  Aaj ka din sirf aapka hai… aur honestly, meri har dua me sirf aap hain   
  Happy Birthday, meri favourite person.  
  Stay the same… kyunki aap jaisi hain, mere liye waise hi perfect hain ✨
</p>
              <p className="text-right pt-6">
                <span className="font-display text-lg italic text-primary">
                  — With all my love, always<br/>
                  <b>YOUR STUPID</b>
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
