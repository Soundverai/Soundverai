import React from "react";
import { motion } from "framer-motion";
import { Waves, Fingerprint, Activity } from "lucide-react";

export const VoiceVisualizer = () => {
  return (
    <section id="how-it-works" className="relative min-h-screen bg-[#02040a] py-32 overflow-hidden flex items-center">
      {/* Background radial gradients for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Refined Text Content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">Neural Stream Active</span>
            </motion.div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8 overflow-visible">
              Voice <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300 italic font-medium pr-4">
                Redefined
              </span>
            </h2>

            <p className="text-lg text-slate-400 font-light leading-relaxed mb-12">
             Built on advanced neural voice architecture, enabling real-time interpretation of speech, tone, and intent for intelligent call automation.
            </p>

            <div className="space-y-4">
              {[
                { icon: Waves, title: "Tonal Intelligence", desc: "Captures emotional subtext." },
                { icon: Fingerprint, title: "Biometric Precision", desc: "99.9% signature accuracy." }
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-500/20 transition-all group">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <f.icon size={22} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">{f.title}</h4>
                    <p className="text-slate-500 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The High-Fidelity Video with Organic Shape */}
          <div className="relative group flex items-center justify-center">
            {/* Pulsing Outer Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse group-hover:bg-cyan-500/30 transition-colors" />
            
            <div className="relative w-full aspect-square max-w-[550px] overflow-hidden">
              {/* Organic Blob Mask for Video */}
              <div 
                className="w-full h-full relative z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
                }}
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover scale-110"
                >
                  <source src="/2.mp4" type="video/mp4" />
                </video>
                
                {/* Glass Inner Border */}
                <div className="absolute inset-0 border-[8px] border-white/10 rounded-inherit pointer-events-none z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-transparent pointer-events-none z-15" />
              </div>

              {/* Float Overlay micro-UI - Repositioned and Styled */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 p-4 px-8 rounded-full bg-black/60 border border-cyan-500/30 backdrop-blur-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)]"
              >
                <div className="flex items-end gap-1 h-8">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [4, Math.random() * 24 + 4, 6] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                      className="w-1 bg-gradient-to-t from-cyan-500 to-white rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Orbiting Ring Element */}
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite] scale-110 pointer-events-none" />
            <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] scale-125 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};