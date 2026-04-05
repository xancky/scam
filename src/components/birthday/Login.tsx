import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VALID_ANSWERS = {
  name: "dumbass", 
  love: "nitya"     
};

interface LoginPageProps {
  onUnlock: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onUnlock }) => {
  const [formData, setFormData] = useState({ name: '', love: '' });
  const [error, setError] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const isNameCorrect = formData.name.toLowerCase().trim() === VALID_ANSWERS.name.toLowerCase();
    const isLoveCorrect = formData.love.toLowerCase().trim() === VALID_ANSWERS.love.toLowerCase();

    if (isNameCorrect && isLoveCorrect) {
      onUnlock();
    } else {
      setError("Incorrect! Don't you love me? Itna bada dhoka... 🥀");
    }
  };

  return (
    <motion.div
      key="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(15px)", y: -20 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink-50"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div animate={{ x: [0, 50, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-50" />
        <motion.div animate={{ x: [0, -40, 0], y: [0, 60, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply blur-3xl opacity-50" />
      </div>

      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-md p-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2.5rem] shadow-2xl">
        <div className="text-center mb-8">
          <span className="text-4xl text-rose-400">💌</span>
          <h1 className="mt-4 text-2xl font-light tracking-wide text-rose-600 italic">For Your Eyes Only</h1>
          <p className="text-sm text-slate-500 mt-2 font-medium">Identify yourself, please...</p>
        </div>

        <form onSubmit={handleUnlock} className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 ml-1">What name do I have you saved as? 💖</label>
            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-pink-100 outline-none focus:ring-2 focus:ring-pink-200 transition-all shadow-sm" placeholder="Type here..." />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-2 ml-1">What is something I really love? 💭</label>
            <input type="text" value={formData.love} onChange={(e) => setFormData({ ...formData, love: e.target.value })} className="w-full px-5 py-4 rounded-2xl bg-white/80 border border-pink-100 outline-none focus:ring-2 focus:ring-pink-200 transition-all shadow-sm" placeholder="Your guess..." />
          </div>
          {error && <p className="text-center text-sm text-rose-500 font-medium">{error}</p>}
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full py-4 bg-gradient-to-r from-rose-400 to-pink-400 text-white font-bold rounded-2xl shadow-lg tracking-wider">Unlock 💌</motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;