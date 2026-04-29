import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Database, Network, Zap } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Float, ContactShadows, Environment } from "@react-three/drei";
import { VoiceSpiral } from "./VoiceSpiral";

export const InfrastructureMonitor = () => {
  const metrics = [
    { name: "CPU COMPUTE", value: 72, icon: Cpu, color: "text-cyan-400" },
    { name: "NEURAL LATENCY", value: 12, unit: "ms", icon: Zap, color: "text-blue-400" },
    { name: "DATA THROUGHPUT", value: 450, unit: "MB/s", icon: Database, color: "text-indigo-400" },
    { name: "NODE UPTIME", value: 99.99, unit: "%", icon: Network, color: "text-purple-400" },
  ];

  const statusLines = [
    "UPLINK_ESTABLISHED: OK",
    "ENCRYPTION_LAYER: ACTIVE",
    "CORE_SYNC: SYNCHRONIZED",
    "VOICE_BUFFER: STABLE"
  ];

  return (
    <section id="features" className="relative min-h-screen bg-[#020617] py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url("/10.svg")' }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent z-20"
              />

              <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                  <VoiceSpiral />
                </Float>
                <ContactShadows opacity={0.4} scale={20} blur={2.4} far={20} color="#06b6d4" />
                <Environment preset="night" />
              </Canvas>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="absolute top-10 left-0 p-4 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 font-mono text-[10px] space-y-1 text-cyan-500/70"
            >
              {statusLines.map((line, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-white/20">[{i}]</span>
                  <span>{line}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                <ShieldCheck size={14} className="text-cyan-400" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Security & Systems</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                Infrastructure <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Built for Speed
                </span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-xl">
                Global edge nodes ensure sub-50ms latency for voice interactions. Our proprietary neural routing handles spike traffic without breaking a sweat.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/5 mb-4 group-hover:bg-cyan-500/10 transition-colors">
                    <m.icon size={20} className={m.color} />
                  </div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-white/30 mb-1">{m.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-white">{m.value}</span>
                    <span className="text-xs text-white/20">{m.unit || ""}</span>
                  </div>
                  <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "70%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 flex items-center gap-4 text-sm font-mono text-cyan-400/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              SYSTEMS_NOMINAL // STABLE_ENVIRONMENT
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
