import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, ExternalLink } from "lucide-react";

const team = [
  {
    name: "Alex Carter",
    role: "Chief Neural Architect",
    specialty: "Prosody Synthesis",
    bio: "Former lead at DeepMind audio labs, pioneering emotional resonance in AI.",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Daniel Wright",
    role: "Head of Voice Design",
    specialty: "Acoustic Mapping",
    bio: "Expert in spatial audio reconstruction and multi-modal voice interaction.",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Sarah Mitchell",
    role: "Core Systems Engineer",
    specialty: "High-Throughput IO",
    bio: "Optimizing 1.2ms latency pipelines for global enterprise deployment.",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  }
];

export const Team = () => {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/test.svg")' }}
      />

      {/* Background HUD elements */}
      <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
        <div className="text-[120px] font-black leading-none text-cyan-500 select-none">PERSONNEL</div>
      </div>

      <div className="container relative z-10 px-6">
        <div className="mb-24 space-y-4 max-w-2xl">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-1 bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
          />
          <h2 className="text-5xl font-bold text-white tracking-tighter uppercase italic">The Operators</h2>
          <p className="text-slate-400 font-light leading-relaxed">
            The minds behind the neural architecture. Our team bridges the gap between signal processing and human connection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/5">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-r border-b border-white/5 p-8 hover:bg-cyan-500/[0.02] transition-colors overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="text-[10px] font-mono text-cyan-500/50 uppercase tracking-[0.3em]">ID // 00{i+1}_NODE</div>
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 text-cyan-400">
                    <Twitter size={15} />
                    <Github size={15} />
                    <Linkedin size={15} />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{member.name}</h3>
                    <p className="text-cyan-400/80 text-xs font-mono uppercase tracking-widest mt-1">{member.role}</p>
                  </div>
                  
                  <div className="py-4 border-y border-white/5">
                    <div className="text-[8px] uppercase tracking-widest text-slate-600 mb-1">Area of Expertise</div>
                    <div className="text-xs text-slate-300 font-medium tracking-wide">{member.specialty}</div>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed font-light line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 group/link cursor-pointer">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-500">View Dossier</span>
                  <ExternalLink size={12} className="text-cyan-500 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative mesh background inside card */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};