import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Zap, Shield, Volume2, Cpu, Network, Waves, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react";

export default function VoxverX1() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[900px] w-full overflow-hidden bg-[#020617]">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="/3.svg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-4 pointer-events-none bg-gradient-to-b from-[#020617]/40 via-transparent to-[#020617]" />
        <div className="absolute top-10 left-10 z-50">
          <Link to="/">
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ArrowLeft size={14} />
              <span className="text-[10px] font-mono tracking-widest uppercase">Back</span>
            </motion.button>
          </Link>
        </div>
        <div className="relative z-30 container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-12 py-1 px-3 rounded-md bg-cyan-500/10 border border-cyan-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Volume2 size={14} className="text-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-cyan-400 font-bold">Next-Gen AI Voice</span>
            </motion.div>

            <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black leading-none tracking-tighter text-white">
              <span className="block overflow-hidden pb-4">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                  VOXVER
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
                  X.1
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 max-w-2xl mx-auto text-lg md:text-xl text-white/50 leading-relaxed font-light"
            >
              The pinnacle of conversational AI, delivering hyper-realistic voices with emotional depth, instantaneous responses, and enterprise-grade reliability.
              <span className="block mt-2 text-white/80 font-normal">Experience the future of human-AI interaction.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-12"
            >
              <a
                href="https://app.soundverai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-cyan-500 text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-cyan-400 transition-colors"
              >
                Try Voxver X.1 Live
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-background">
        <div className="container relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 animate-pulse">// Key Features</span>
            <h2 className="text-display text-5xl md:text-6xl font-black mb-8 leading-[0.9]">
              Revolutionary <br />
              <span className="bg-gradient-text bg-clip-text text-transparent italic">Capabilities</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              Voxver X.1 redefines what's possible in AI voice technology, offering unparalleled emotional intelligence and performance.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Emotional Resonance",
                desc: "Advanced prosody synthesis captures the nuances of human emotion, from subtle inflections to dramatic expressions, creating truly lifelike conversations."
              },
              {
                icon: Zap,
                title: "Sub-50ms Latency",
                desc: "Lightning-fast processing ensures real-time interactions that feel instantaneous, perfect for dynamic customer service and interactive applications."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade encryption and compliance with global standards protect your data while maintaining the highest levels of performance and reliability."
              },
              {
                icon: Volume2,
                title: "Studio-Quality Audio",
                desc: "Crystal-clear, high-fidelity voice synthesis that rivals professional voice actors, with customizable tones and accents for any use case."
              },
              {
                icon: Network,
                title: "Global Scalability",
                desc: "Distributed infrastructure handles millions of concurrent conversations worldwide, with automatic scaling to meet demand spikes."
              },
              {
                icon: Cpu,
                title: "Adaptive Learning",
                desc: "Continuously improves through machine learning, adapting to user preferences and optimizing performance over time."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative glass-panel p-8 overflow-hidden border-white/5 transition-all duration-500 hover:border-primary/30 shadow-premium"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-display text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-white/80">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Foundation Section */}
      <section className="relative py-32 px-6 bg-[#010101] text-white">
        <div className="container relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-6 animate-pulse">// Technical Foundation</span>
            <h2 className="text-display text-5xl md:text-6xl font-black mb-8 leading-[0.9]">
              Powered by <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent italic">NVIDIA Excellence</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-3xl mx-auto">
              Built on the world's most advanced AI infrastructure, Voxver X.1 leverages cutting-edge NVIDIA technologies for unmatched performance and reliability.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8 border-cyan-500/20 bg-cyan-950/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Model Creation</h3>
                <p className="text-white/70 mb-4">
                  Our proprietary voice models are crafted using NVIDIA NeMo, enabling hyper-realistic TTS and advanced voice cloning capabilities.
                </p>
                <div className="text-sm text-white/50">
                  <strong>Key SDK:</strong> NVIDIA NeMo Framework
                </div>
              </div>
              <div className="glass-panel p-8 border-cyan-500/20 bg-cyan-950/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Real-Time Processing</h3>
                <p className="text-white/70 mb-4">
                  NVIDIA Riva powers our production engine, delivering sub-50ms latency for natural, streaming conversations.
                </p>
                <div className="text-sm text-white/50">
                  <strong>Key SDK:</strong> NVIDIA Riva
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8 border-cyan-500/20 bg-cyan-950/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Unified Deployment</h3>
                <p className="text-white/70 mb-4">
                  NVIDIA Triton Inference Server manages our entire pipeline, ensuring 99.99% uptime and seamless scalability.
                </p>
                <div className="text-sm text-white/50">
                  <strong>Key SDK:</strong> NVIDIA Triton Inference Server
                </div>
              </div>
              <div className="glass-panel p-8 border-cyan-500/20 bg-cyan-950/10">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">Performance Optimization</h3>
                <p className="text-white/70 mb-4">
                  NVIDIA TensorRT optimizes models for maximum speed, enabling our lightning-fast response times.
                </p>
                <div className="text-sm text-white/50">
                  <strong>Key SDK:</strong> NVIDIA TensorRT
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-background">
        <div className="container relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 animate-pulse">// Transform Your Business</span>
            <h2 className="text-display text-5xl md:text-6xl font-black mb-8 leading-[0.9]">
              Unleash the <br />
              <span className="bg-gradient-text bg-clip-text text-transparent italic">Power of Voice</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
              Voxver X.1 isn't just another AI voice tool—it's a complete transformation of how businesses interact with customers, automate processes, and scale operations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-bold mb-4">Customer Experience Revolution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver personalized, emotionally intelligent interactions that build loyalty and reduce churn. Our AI understands context, remembers preferences, and adapts in real-time.
                </p>
              </div>
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-bold mb-4">Operational Efficiency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automate complex workflows with human-like precision. Handle millions of calls simultaneously while maintaining the quality of personal service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connect with customers worldwide in their native languages and accents. Our multilingual capabilities ensure consistent, high-quality experiences across borders.
                </p>
              </div>
              <div className="glass-panel p-8">
                <h3 className="text-2xl font-bold mb-4">Future-Proof Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Built on the latest AI advancements, Voxver X.1 evolves with your business. Continuous learning and updates ensure you always have cutting-edge capabilities.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-20"
          >
            <a
              href="https://app.soundverai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-full hover:bg-primary/80 transition-colors"
            >
              Start Your Voice Revolution
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};