const cols = [
  {
    title: "Product",
    links: ["Voice Generation", "Call Automation", "Conversational AI", "Analytics"],
  },
  {
    title: "Solutions",
    links: ["Customer Support", "Sales Automation", "Lead Qualification", "Enterprise"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers", "Contact"],
  },
];

export const Footer = () => {
  return (
    <footer className="relative py-24 px-6 bg-background border-t border-white/5 overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 md:gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <img src="/Logo.svg" alt="SoundverAI" className="h-24 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-10">
              A neural voice infrastructure for high-fidelity voice automation. Bridging human emotion with intelligent digital systems.

            </p>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 glass-panel rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-pointer border-white/5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="h-10 w-10 glass-panel rounded-full flex items-center justify-center text-muted-foreground hover:text-primary transition-colors cursor-pointer border-white/5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Platform</h4>
            <ul className="space-y-4">
              {["Neural Engine", "Model Hub", "Edge Mesh", "Security"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Company</h4>
            <ul className="space-y-4">
              {["Our Mission", "Team", "Careers", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="glass-panel p-8 rounded-[2rem] border-white/5 relative overflow-hidden group shadow-premium">
              <div className="relative z-10">
                <h4 className="text-display text-xl font-bold mb-4">Stay Synchronized</h4>
                <p className="text-xs text-muted-foreground mb-6">Weekly insights on the intersection of AI and human linguistics.</p>
                <div className="relative">
                  <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-xs focus:outline-none focus:border-primary transition-colors" />
                  <button className="absolute right-1 top-1 bottom-1 px-6 bg-primary text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all">Join</button>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">© 2026 SoundverAI — All Rights Reserved</div>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Legal"].map((link) => (
              <a key={link} href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
