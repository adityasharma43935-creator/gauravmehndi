import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';
import aboutImage from '../assets/images/mehndi_bridal_1784045431694.jpg';

// Simple Counter Component that counts up when it comes into view
function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center p-5 bg-brand-green-dark/50 rounded-sm border border-brand-gold/15 hover:border-brand-gold/40 transition-colors duration-500">
      <div className="font-serif text-3xl md:text-4xl text-brand-gold font-light mb-1">
        {count}
        {suffix}
      </div>
      <div className="font-sans text-[10px] md:text-xs uppercase tracking-[0.15em] text-brand-cream/60">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Subtle gold decoration */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Framed Image with Hover Effects */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] w-full rounded-sm shadow-2xl overflow-hidden group border border-brand-gold/10"
            >
              {/* Gold double frame decoration */}
              <div className="absolute inset-4 border border-brand-gold/20 z-10 pointer-events-none group-hover:border-brand-gold/40 transition-all duration-700" />
              <div className="absolute inset-2 border border-brand-gold/10 z-10 pointer-events-none" />
              
              <img
                src={aboutImage}
                alt="Bridal Mehndi Detail"
                className="w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-brand-green-dark/95 border border-brand-gold/25 p-5 rounded-sm shadow-2xl max-w-[180px] glow-gold hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Award size={18} />
                </div>
                <span className="font-serif text-brand-gold text-xs uppercase tracking-wider font-semibold">Certified Artist</span>
              </div>
              <p className="font-sans text-[11px] text-brand-cream/70 leading-relaxed font-light">
                Using 100% natural organic henna with rich deep stain results.
              </p>
            </motion.div>
          </div>

          {/* Right Column: About Artistry Description */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
                MEET THE ARTIST
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-8">
                The Legacy of <br />
                <span className="text-brand-gold font-light">Gaurav Mehndi Artistry</span>
              </h2>
              
              <p className="font-sans text-brand-cream/80 text-sm md:text-base leading-relaxed mb-6 font-light">
                Gaurav Mehndi Artist is a premier brand in luxurious bridal mehndi designing, renowned for creating detailed, symmetric masterpieces that reflect the rich Indian heritage. With a passion starting over a decade ago, Gaurav has transformed bridal palms into canvases of beautiful visual stories, combining classic Indian wedding symbols, detailed portrait figures, and modern geometric elegance.
              </p>

              <p className="font-sans text-brand-cream/65 text-xs md:text-sm leading-relaxed mb-12 font-light">
                We believe that every bride deserves an exceptional and relaxing mehndi ceremony. That is why we formulate our own henna paste using premium triple-filtered organic Rajasthani Sojat leaves, mixed with standard therapeutic pure essential oils like eucalyptus and tea tree. This guarantees a safe application, divine soothing aroma, and an outstanding, rich dark-maroon stain that highlights your special day.
              </p>

              {/* Counter Statistics Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <Counter value={1200} suffix="+" label="Brides Served" />
                <Counter value={12} suffix="+" label="Years Experience" />
                <Counter value={2500} suffix="+" label="Happy Clients" />
                <Counter value={150} suffix="+" label="Design Concepts" />
              </div>

              {/* Checkpoints list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-brand-gold/15">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-white text-sm uppercase tracking-wider mb-1 font-medium">Tailored Portrayals</h4>
                    <p className="font-sans text-brand-cream/60 text-xs font-light">Custom portrait silhouettes of bride and groom on request.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-brand-gold mt-1 shrink-0" />
                  <div>
                    <h4 className="font-serif text-white text-sm uppercase tracking-wider mb-1 font-medium">100% Organic Formula</h4>
                    <p className="font-sans text-brand-cream/60 text-xs font-light">Chemical-free, skin-friendly, and deep premium stain guaranteed.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
