import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import heroImage from '../assets/images/mehndi_hero_1784045414813.jpg';

interface HeroProps {
  onNavClick: (selector: string) => void;
}

export default function Hero({ onNavClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-green-dark"
    >
      {/* Background Image Container with Cinematic Zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src={heroImage}
            alt="Gaurav Mehndi Artistry"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Luxury Vignette and Color Grading Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green-dark/70 via-brand-green-dark/80 to-brand-green-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green-dark/65 via-transparent to-brand-green-dark/65" />
      </div>

      {/* Floating Decorative Mandalas (Golden particles) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-15 rounded-full border border-brand-gold/40"
            style={{
              width: `${(i + 1) * 120}px`,
              height: `${(i + 1) * 120}px`,
              top: '50%',
              left: '50%',
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 40 + i * 15,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}

        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-brand-gold/40"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.15, 0.45, 0.15],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          >
            <Sparkles size={8 + Math.random() * 12} />
          </motion.div>
        ))}
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12">
        {/* Luxury Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-8 h-[1px] bg-brand-gold" />
          <span className="font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-brand-gold font-semibold">
            The Art of Fine Henna
          </span>
          <span className="w-8 h-[1px] bg-brand-gold" />
        </motion.div>

        {/* Main Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.1em] text-white leading-tight uppercase font-medium"
            id="hero-title"
          >
            Gaurav <span className="text-brand-gold font-light">Mehndi</span>
            <br />
            <span className="tracking-[0.15em] font-light italic">Artist</span>
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.6, delay: 0.9 }}
          className="font-sans text-sm sm:text-base md:text-lg text-brand-cream tracking-[0.2em] uppercase max-w-2xl mb-12 font-light"
          id="hero-subheading"
        >
          Professional Bridal & Traditional Mehndi Artist
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          <button
            onClick={() => onNavClick('#gallery')}
            className="w-full sm:w-auto px-8 py-4 border border-brand-gold/30 text-brand-gold hover:border-brand-gold hover:bg-brand-gold hover:text-brand-green-dark font-sans text-xs uppercase tracking-[0.15em] font-medium transition-all duration-500 rounded-sm cursor-pointer"
          >
            View Portfolio
          </button>
          <button
            onClick={() => onNavClick('#contact')}
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold border border-brand-gold text-brand-green-dark hover:bg-transparent hover:text-brand-gold font-sans text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-500 rounded-sm cursor-pointer"
          >
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Smooth Cinematic Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => onNavClick('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-brand-cream/60 group-hover:text-brand-gold transition-colors duration-300">
          Scroll to explore
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-brand-cream/30 group-hover:border-brand-gold flex justify-center py-1.5 transition-colors duration-300">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 rounded-full bg-brand-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
