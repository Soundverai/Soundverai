import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Zap, ShieldCheck, Fingerprint, Layers, Activity, Radio } from "lucide-react";
import { useRef } from "react";

export const Dashboard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={containerRef} id="dashboard" className="relative bg-[#010101] text-white">
      {/* 6.svg Background Image */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img 
          src="/6.svg" 
          alt="background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-[#010101]/20 via-transparent to-[#010101]/20" />

      <div className="flex flex-col lg:flex-row min-h-[250vh] relative z-10">
        
        {/* LEFT PILLAR: The "Fixed" Technical Core */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:w-1/3 border-r border-white/10 p-12 flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-cyan-950/20 via-transparent to-transparent">
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.5em] text-cyan-500/70">SYSTEM_STATUS: OPERATIONAL</span>
            </div>
            
            <h2 className="text-6xl font-black leading-none tracking-tighter mb-8">
              NEURAL<br />DASH.
            </h2>
            
            <div className="space-y-8">
              <div className="group">
                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-2">Processing Load</div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ width: "65%" }} 
                    animate={{ x: [-100, 0] }} 
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400" 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-cyan-400 font-mono text-xl">0.002s</div>
                  <div className="text-[9px] text-white/40 uppercase">Response</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-cyan-400 font-mono text-xl">94.2k</div>
                  <div className="text-[9px] text-white/40 uppercase">Neurons</div>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating Visual Element */}
          <div className="relative flex justify-center py-20">
            <motion.div style={{ rotate }} className="relative">
               <Cpu size={120} strokeWidth={0.5} className="text-cyan-500/20" />
               <motion.div 
                animate={{ opacity: [0.2, 1, 0.2] }} 
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 flex items-center justify-center"
               >
                 <Activity size={40} className="text-cyan-400" />
               </motion.div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT CONTENT: The "Scrollable" Feature Stack */}
        <div className="lg:w-2/3 p-6 lg:p-24 space-y-32 lg:space-y-64">
          
          {/* Feature 01 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <div className="absolute -left-12 top-0 text-6xl font-black text-white/5 select-none">01</div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <img src="/32.svg" alt="Spectral Synthesis" className="w-12 h-12 mb-6" />
                <h3 className="text-4xl font-bold mb-4">Spectral Synthesis</h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  Our V4 engine decomposes audio into raw spectral data, reconstructing it with phase-aligned precision that tricks even the most sensitive human ear.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-[3rem] border border-cyan-500/20 backdrop-blur-3xl flex items-center justify-center group-hover:scale-105 transition-transform">
                 <img src="/32.svg" alt="Spectral Synthesis" className="w-20 h-20" />
              </div>
            </div>
          </motion.div>

          {/* Feature 02 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group md:text-right"
          >
            <div className="absolute -right-12 top-0 text-6xl font-black text-white/5 select-none">02</div>
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="flex-1">
                <img src="/33.svg" alt="Cognitive Security" className="w-12 h-12 mb-6 md:ml-auto" />
                <h3 className="text-4xl font-bold mb-4">Cognitive Security</h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  Every voice stream is encrypted via biometric fingerprinting. We don't just generate voice; we protect the identity behind the synthesis.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-[3rem] border border-cyan-500/20 backdrop-blur-3xl flex items-center justify-center group-hover:scale-105 transition-transform">
                 <img src="/33.svg" alt="Cognitive Security" className="w-20 h-20" />
              </div>
            </div>
          </motion.div>

          {/* Feature 03 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative group"
          >
            <div className="absolute -left-12 top-0 text-6xl font-black text-white/5 select-none">03</div>
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <img src="/34.svg" alt="Neural Latency" className="w-12 h-12 mb-6" />
                <h3 className="text-4xl font-bold mb-4">Neural Latency</h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  Real-time inference at the edge. Our distributed node network ensures sub-10ms delivery, eliminating the "uncanny valley" of conversational delays.
                </p>
              </div>
              <div className="w-full md:w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[3rem] border border-emerald-500/20 backdrop-blur-3xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  <img src="/34.svg" alt="Neural Latency" className="w-20 h-20" />
              </div>
            </div>
          </motion.div>

          {/* Final Call to Action area */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="p-12 rounded-[4rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 text-center"
          >
            <h4 className="text-2xl font-bold mb-6">Experience ultra-low latency voice processing.
</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">
                Initialize API 
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors">
                Read Documentation
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};