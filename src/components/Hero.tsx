import { motion } from "framer-motion";
import { ArrowRight, Zap, Volume2, Shield, Cpu } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative h-screen min-h-[900px] w-full overflow-hidden bg-[#020617]">
      {/* SVG Background Image */}
      <div className="absolute inset-0 z-0 opacity-50">
        <img 
          src="/3.svg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay gradient for depth and readability */}
      <div className="absolute inset-0 z-4 pointer-events-none bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]" />

      {/* Modern HUD Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute top-10 left-10 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-4 py-2 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">Protocol: Neural-Audio-v4</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content: Central Redesign */}
      <div className="relative z-30 container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl mx-auto"
        >
          {/* Futuristic Label */}
          <motion.div 
            className="inline-flex items-center gap-2 mb-12 py-1 px-3 rounded-md bg-cyan-500/10 border border-cyan-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Volume2 size={14} className="text-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold">The Future of Sound</span>
          </motion.div>
          
          {/* Hero Title */}
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black leading-none tracking-tighter text-white">
            <span className="block overflow-hidden pb-4">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
              >
                SOUND
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block italic"
                style={{ 
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.3)",
                  color: "transparent"
                }}
              >
                Intelligence

              </motion.span>
            </span>
          </h1>

          {/* New Feature Chips */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            {[
              { icon: Shield, text: "Secure Sync" },
              { icon: Cpu, text: "AI Synthesis" },
              { icon: Zap, text: "Zero Latency" }
            ].map((chip, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                <chip.icon size={14} className="text-cyan-400" />
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-medium">{chip.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light"
          >
            Experience the most advanced cognitive audio engine ever built
            <span className="block mt-2 text-white/80 font-normal"> Powered by real-time emotional intelligence, studio-grade voice synthesis, and limitless scalability.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <a
              href="/voxver-x1"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-cyan-400 transition-colors"
            >
              Discover Voxver X.1
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Dynamic Waveform at bottom */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-end gap-1.5 h-12 opacity-30">
          {Array.from({ length: 40 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-cyan-400 rounded-full"
              animate={{ 
                height: [10, Math.random() * 40 + 10, 10]
              }}
              transition={{
                duration: 0.8 + Math.random(),
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
