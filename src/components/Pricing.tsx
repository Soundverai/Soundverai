import { motion } from "framer-motion";
import { Check, Zap, Shield, Crown } from "lucide-react";
import { useState } from "react";
import { PayPalModal } from "./PayPalModal";

const plans = [
  {
    name: "Vox Start",
    price: "49",
    description: "Ideal for startups and growing teams needing reliable AI voice automation.",
    features: ["5,000 minutes/month", "Standard Voice Gallery", "API Access", "Email Support", "Community Access"],
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-cyan-400/20",
    border: "border-cyan-500/20",
    highlight: false,
  },
  {
    name: "Vox Pro",
    price: "99",
    description: "High-performance infrastructure for businesses with high call volumes.",
    features: ["25,000 minutes/month", "Premium Neural Voices", "Ultra-low Latency (sub-20ms)", "Priority API Support", "Custom Voice Tuning"],
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/30 to-cyan-400/30",
    border: "border-cyan-400/50",
    highlight: true,
  },
  {
    name: "Vox Ultra",
    price: "Custom",
    description: "Enterprise-grade reliability and scaling for global organizations.",
    features: ["Unlimited Minutes", "Custom Voice Cloning", "Dedicated Infrastructure", "24/7 Phone Support", "SLA Guarantee"],
    icon: <Crown className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-cyan-400/20",
    border: "border-cyan-500/20",
    highlight: false,
  },
];

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  return (
    <section id="pricing" className="relative py-32 bg-black overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-15 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/Pricing.svg")' }}
      />

      {/* Background visual effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Plans & Pricing</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8"
          >
            Flexible <span className="text-cyan-400">Voice Scaling.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl"
          >
            Choose a plan that grows with your call volume and automation needs. No hidden fees, just intelligent performance.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 md:p-10 rounded-[3rem] border transition-all duration-500 group ${
                plan.highlight 
                  ? "bg-gradient-to-br from-zinc-900 to-zinc-950 shadow-[0_0_50px_rgba(59,130,246,0.15)]" 
                  : "bg-zinc-900/40"
              } ${plan.border}`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-500 text-black text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full ring-4 ring-black">
                  Most Popular
                </div>
              )}

              <div className="flex items-center justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${plan.color}`}>
                  {plan.icon}
                </div>
                <div className="text-right">
                  <span className="block text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{plan.name}</span>
                  <div className="flex items-baseline justify-end gap-1 text-white">
                    {plan.price !== "Custom" && <span className="text-2xl font-bold">$</span>}
                    <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-gray-500 text-sm font-medium">/mo</span>}
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {plan.description}
              </p>

              <div className="h-px bg-white/5 w-full mb-8" />

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-gray-300">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  if (plan.price !== "Custom") {
                    setSelectedPlan({ name: plan.name, price: plan.price });
                  } else {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-5 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                  plan.highlight
                    ? "bg-cyan-500 text-black hover:bg-cyan-400 shadow-[0_10px_20px_-10px_rgba(34,211,238,0.5)]"
                    : "bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-24 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 font-medium">
            Need a custom solution for your enterprise?{" "}
            <a href="#contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Speak with our experts &rarr;
            </a>
          </p>
        </motion.div>
      </div>

      <PayPalModal 
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ""}
        amount={selectedPlan?.price || "0"}
      />
    </section>
  );
};
