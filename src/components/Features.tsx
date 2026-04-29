import { motion } from "framer-motion";
import { Brain, Network, Waves, Zap, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neural Engine",
    desc: "Proprietary LLMs optimized specifically for natural, low-latency vocal interactions.",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    icon: Network,
    title: "Global Mesh",
    desc: "Distributed edge network ensuring <40ms response times worldwide.",
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    icon: Waves,
    title: "Human Echo",
    desc: "Advanced prosody control for lifelike breathing, pauses, and emotional depth.",
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    icon: Zap,
    title: "Instant Sync",
    desc: "Zero-configuration deployment to your existing telephony infrastructure.",
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-4 gap-6 auto-rows-fr">
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-1 glass-panel p-12 flex flex-col justify-center border-none bg-gradient-to-br from-primary/10 via-transparent to-transparent shadow-none"
          >
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 animate-pulse">// Core Technology</span>
            <h2 className="text-display text-5xl md:text-6xl font-black mb-8 leading-[0.9]">
              Engineering <br />
              <span className="bg-gradient-text bg-clip-text text-transparent italic">The Future</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              We've dismantled traditional IVR and rebuilt it from the silicon up using deep neural networks.
            </p>
          </motion.div>

          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative glass-panel p-10 overflow-hidden border-white/5 transition-all duration-500 hover:border-primary/30 shadow-premium ${f.className}`}
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                <f.icon size={120} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
                  <f.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-display text-3xl font-bold mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed transition-colors group-hover:text-white/80">
                  {f.desc}
                </p>

                <div className="mt-auto pt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50 group-hover:text-primary transition-colors">
                  <span className="h-px w-8 bg-current opacity-30" />
                  <span>Module {String(i + 1).padStart(2, '0')}</span>
                  <ChevronRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
              </div>

              {/* Animated highlight on hover */}
              <div className="absolute inset-0 bg-gradient-radial-glow from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
