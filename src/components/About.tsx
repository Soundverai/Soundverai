import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Mic2, Users, Rocket, ShieldCheck } from "lucide-react";

export const About = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} id="about" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="container relative mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          {/* Visual Storytelling Side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <motion.div style={{ y: y1 }} className="space-y-4">
                <div className="aspect-[4/5] glass-panel rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                  <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Tech" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                </div>
                <div className="aspect-square glass-panel rounded-3xl p-8 flex flex-col justify-end bg-primary/5 border-primary/20">
                  <Users className="text-primary mb-4" size={32} />
                  <div className="text-2xl font-bold font-display leading-tight">Human-Centric Design</div>
                </div>
              </motion.div>
              
              <motion.div style={{ y: y2 }} className="space-y-4 pt-12">
                <div className="aspect-square glass-panel rounded-3xl p-8 flex flex-col justify-end bg-cyan-500/5 border-cyan-500/20">
                  <Rocket className="text-cyan-400 mb-4" size={32} />
                  <div className="text-2xl font-bold font-display leading-tight">Rapid Deployment</div>
                </div>
                <div className="aspect-[4/5] glass-panel rounded-3xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700" />
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Network" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
                </div>
              </motion.div>
            </div>

            {/* Floating Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </div>

          {/* Text Content Side */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary mb-6 block">// Our Story</span>
              <h2 className="text-display text-5xl md:text-7xl font-black mb-10 leading-[0.9]">
                Beyond <br />
                <span className="bg-gradient-text bg-clip-text text-transparent">Automation.</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We believe that technology should enhance human connection, not replace it. SoundverAI was born from a simple question: <span className="text-white italic">"What if machines could listen as well as they talk?"</span>
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team of neuroscientists and engineers spent five years perfecting the fine balance between mathematical precision and the messy, beautiful nuances of human speech.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="space-y-2">
                  <div className="text-4xl font-display font-black text-primary">99.9%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Voice Fidelity</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-display font-black text-primary">50M+</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Calls Automated</div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] group"
              >
                Learn about our mission
                <div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all">
                  <Rocket size={14} />
                </div>
              </motion.button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
