import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SoundverAI reduced our support call handling time by 60%. The voice quality is indistinguishable from human agents.",
    name: "Jessica Martinez",
    company: "TECHCORP",
  },
  {
    quote: "We scaled customer support instantly without increasing headcount. SoundverAI handles every call smoothly.",
    name: "Daniel Brooks",
    company: "NEXA SOLUTIONS",
  },
  {
    quote: "Response times dropped significantly and customer satisfaction improved within just a few weeks of use.",
    name: "Aisha Khan",
    company: "VERTEX COMMERCE",
  },
  {
    quote: "The conversational accuracy and voice realism completely transformed how we manage customer interactions.",
    name: "Michael Turner",
    company: "CLOUDSYNC INC",
  },
  {
    quote: "SoundverAI feels like a real support team operating 24/7 with zero delays or communication gaps.",
    name: "Emily Rogers",
    company: "ORBITAL SYSTEMS",
  },
];

export const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative py-24 bg-[#0a0e27] text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover pointer-events-none"
        style={{ backgroundImage: 'url("/test.svg")' }}
      />
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-black tracking-tighter mb-4"
          >
            What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Clients</span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Trusted by leading enterprises worldwide
          </motion.p>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative px-6">
          {/* Gradient fade left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0e27] to-transparent z-20 pointer-events-none" />
          
          {/* Gradient fade right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0e27] to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-96 group"
              >
                <div className="relative h-full p-8 bg-gradient-to-br from-blue-950/30 to-black/60 rounded-2xl border border-blue-500/20 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Star rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-cyan-400 text-cyan-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg font-light leading-relaxed mb-8 text-white/80 italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Divider */}
                  <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6" />

                  {/* Author info */}
                  <div>
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-cyan-400/70 font-mono uppercase tracking-wider">{testimonial.company}</p>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {testimonials.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0.5 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`h-2 rounded-full ${index === 0 ? "w-8 bg-cyan-400" : "w-2 bg-blue-600/50 hover:bg-blue-400"}`}
            />
          ))}
        </div>
      </div>

      {/* Custom scrollbar hiding */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;