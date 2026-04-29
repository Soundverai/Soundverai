import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { ArrowUpRight, Mail, Phone, CheckCircle2 } from "lucide-react";

export const Contact = () => {
  const [state, handleSubmit] = useForm('mkokyazp');

  if (state.succeeded) {
    return (
      <section id="contact" className="relative overflow-hidden py-32 px-6 bg-slate-950 flex items-center justify-center">
        <div className="absolute inset-0 opacity-15 bg-center bg-no-repeat bg-cover pointer-events-none" style={{ backgroundImage: 'url("/11.svg")' }} />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6 relative z-10"
        >
          <div className="flex justify-center">
            <CheckCircle2 size={80} className="text-cyan-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase">Submission Received</h2>
          <p className="text-white/50 text-xl font-light">Our neural network has received your uplink. <br />An operator will respond shortly.</p>
          <motion.button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 text-xs uppercase tracking-widest hover:bg-cyan-500/20 transition-all rounded"
          >
            Send Another Signal
          </motion.button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative overflow-hidden py-32 px-6 bg-slate-950">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-15 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/11.svg")' }}
      />
      
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">Get In Touch</span>
          <h2 className="text-display mt-4 text-5xl leading-[1.05] md:text-7xl">
            Turn every customer call into an <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">intelligent</span> interaction.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
            Partner with SoundverAI to deploy real-time voice automation across your support system.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 space-y-6"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="mt-2 w-full border border-cyan-500/20 bg-slate-900/40 px-4 py-3 text-white backdrop-blur-md transition-all duration-500 placeholder:text-muted-foreground/40 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/20 rounded"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-[10px] mt-1 uppercase" />
            </div>
            <div className="group">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                required
                className="mt-2 w-full border border-cyan-500/20 bg-slate-900/40 px-4 py-3 text-white backdrop-blur-md transition-all duration-500 placeholder:text-muted-foreground/40 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/20 rounded"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-[10px] mt-1 uppercase" />
            </div>
          </div>

          <div className="group">
            <label htmlFor="company" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company name"
              className="mt-2 w-full border border-cyan-500/20 bg-slate-900/40 px-4 py-3 text-white backdrop-blur-md transition-all duration-500 placeholder:text-muted-foreground/40 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/20 rounded"
            />
            <ValidationError prefix="Company" field="company" errors={state.errors} className="text-red-400 text-[10px] mt-1 uppercase" />
          </div>

          <div className="group">
            <label htmlFor="message" className="text-[10px] uppercase tracking-[0.3em] text-cyan-400/70">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell us about your customer support needs..."
              required
              className="mt-2 w-full resize-none border border-cyan-500/20 bg-slate-900/40 px-4 py-3 text-white backdrop-blur-md transition-all duration-500 placeholder:text-muted-foreground/40 focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/20 rounded"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-[10px] mt-1 uppercase" />
          </div>

          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 px-10 py-4 text-sm uppercase tracking-[0.25em] text-cyan-400 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/50 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 font-bold">
                {state.submitting ? "Transmitting..." : "Send Message"}
              </span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.form>

        {/* Alternative contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-16 border-t border-cyan-500/10 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">sales@soundverai.com</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+1 (844) SOUND-AI</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
