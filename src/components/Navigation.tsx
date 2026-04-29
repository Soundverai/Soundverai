import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const items = ["Get Started", "Dashboard", "Features", "How It Works", "Pricing", "Contact"];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3"
            : "py-6"
        }`}
      >
        <nav className={`container mx-auto flex items-center justify-between px-6 rounded-full transition-all duration-500 ${
          scrolled 
            ? "glass-panel py-2 shadow-premium border-white/5" 
            : "bg-transparent py-0"
        }`}>
          <a href="#" className="group flex items-center gap-3">
            <img src="/Logo.svg" alt="SoundverAI" className="h-32 w-auto" />
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {items.slice(1).map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="group relative text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-cyan-400"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="/voxver-x1" className="group relative px-6 py-2.5 rounded-full overflow-hidden bg-white text-black text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105 active:scale-95 inline-block">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-foreground p-2 glass-panel rounded-full"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
            <div className="relative flex h-full flex-col items-center justify-center gap-8 p-8">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-foreground"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
              {items.map((item, i) => (
                <motion.a
                  key={item}
                  href={item === "Get Started" ? "/voxver-x1" : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="text-display text-3xl tracking-wider text-foreground hover:text-cyan-400"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
