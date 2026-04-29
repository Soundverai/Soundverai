import { motion } from "framer-motion";

const projects = [
  {
    name: "Mycelia OS",
    cat: "Edge Compute",
    year: "2025",
    span: "lg:col-span-7 lg:row-span-2",
    height: "h-[440px]",
  },
  {
    name: "Bloom Synth",
    cat: "Generative Audio",
    year: "2025",
    span: "lg:col-span-5",
    height: "h-[210px]",
  },
  {
    name: "Rootkit",
    cat: "Developer SDK",
    year: "2024",
    span: "lg:col-span-5",
    height: "h-[210px]",
  },
  {
    name: "Photon Garden",
    cat: "Vision Models",
    year: "2024",
    span: "lg:col-span-4",
    height: "h-[280px]",
  },
  {
    name: "Hivemind",
    cat: "Multi-Agent",
    year: "2025",
    span: "lg:col-span-8",
    height: "h-[280px]",
  },
];

const LiveSimulation = ({ seed = 0 }: { seed?: number }) => (
  <svg viewBox="0 0 200 120" className="h-full w-full">
    <defs>
      <radialGradient id={`sim-${seed}`}>
        <stop offset="0%" stopColor="hsl(145 90% 55%)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="hsl(150 80% 45%)" stopOpacity="0" />
      </radialGradient>
    </defs>
    {Array.from({ length: 14 }).map((_, i) => {
      const x = 20 + ((i * 37 + seed * 13) % 160);
      const y = 20 + ((i * 19 + seed * 7) % 80);
      const r = 2 + (i % 4);
      return (
        <g key={i}>
          <circle cx={x} cy={y} r={r * 4} fill={`url(#sim-${seed})`}>
            <animate attributeName="r" values={`${r * 3};${r * 6};${r * 3}`} dur={`${2 + (i % 3)}s`} repeatCount="indefinite" begin={`${i * 0.2}s`} />
          </circle>
          <circle cx={x} cy={y} r={r * 0.5} fill="hsl(140 100% 85%)" />
        </g>
      );
    })}
    {Array.from({ length: 8 }).map((_, i) => {
      const x1 = 20 + ((i * 37) % 160);
      const y1 = 20 + ((i * 19) % 80);
      const x2 = 20 + ((i * 51) % 160);
      const y2 = 20 + ((i * 29) % 80);
      return (
        <line key={`l${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(145 90% 55%)" strokeWidth="0.4" opacity="0.4">
          <animate attributeName="opacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
        </line>
      );
    })}
  </svg>
);

export const Work = () => {
  return (
    <section id="research" className="relative px-6 py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary-glow">// Field Notes</span>
            <h2 className="text-display mt-4 text-5xl leading-[1.05] md:text-6xl">
              Living systems,<br />
              <span className="bg-gradient-text bg-clip-text text-transparent">in the wild.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Five active organisms grown inside Verdant — each a study in emergence,
            resilience, and quiet machine intuition.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-[210px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className={`glass-card group relative overflow-hidden ${p.span} ${p.height} cursor-pointer`}
              style={{ perspective: 1000 }}
            >
              {/* Metallic green frame accent corners */}
              <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-primary-glow/60" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-primary-glow/60" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-primary-glow/60" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary-glow/60" />

              {/* Living simulation */}
              <div className="absolute inset-0 opacity-50 transition-all duration-700 group-hover:opacity-90 group-hover:scale-110">
                <LiveSimulation seed={i} />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

              <div className="relative flex h-full flex-col justify-between p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary-glow/80">{p.cat}</span>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <div>
                  <h3 className="text-display text-2xl text-foreground transition-all duration-500 group-hover:text-primary-glow group-hover:translate-x-1 md:text-3xl">
                    {p.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="h-px w-8 bg-primary-glow transition-all duration-500 group-hover:w-16" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Observe →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
