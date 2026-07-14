import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Featured from './components/Featured';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Setup Smooth Scrolling (Lenis) & GSAP ScrollTrigger Integration
  useEffect(() => {
    // Scroll to top on refresh
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Fade out preloader after 2.4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      clearTimeout(timer);
    };
  }, []);

  // 2. Custom Gold Cursor Follower Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Track when hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') !== null || 
        target.closest('button') !== null || 
        target.closest('.cursor-pointer') !== null;
      
      setIsHoveringLink(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // 3. Lenis Smooth Scroll Navigation Event
  const handleNavClick = (selector: string) => {
    if (lenisRef.current) {
      // Find element and scroll with an offset to accommodate the fixed header
      lenisRef.current.scrollTo(selector, { 
        offset: -75,
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-brand-green-dark text-white font-sans min-h-screen selection:bg-brand-gold selection:text-brand-green-dark overflow-x-hidden">
      
      {/* A. Cinematic Luxury Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-brand-green-dark z-50 flex flex-col items-center justify-center"
          >
            {/* Spinning Golden Decorative Mandala */}
            <motion.div
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: 'easeOut' }}
              className="relative w-28 h-28 border border-brand-gold/30 rounded-full flex items-center justify-center mb-8 glow-gold"
            >
              <div className="absolute w-24 h-24 border border-dashed border-brand-gold/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-16 h-16 border border-brand-gold/15 rounded-full" />
              <span className="font-serif text-brand-gold text-2xl font-light tracking-[0.2em]">G</span>
            </motion.div>

            {/* Letter spacing reveal text */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ letterSpacing: '0.1em', opacity: 0 }}
                animate={{ letterSpacing: '0.3em', opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.4 }}
                className="font-serif text-white text-base md:text-lg tracking-[0.3em] uppercase text-center"
              >
                GAURAV MEHNDI ARTIST
              </motion.h2>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-sans text-[9px] uppercase tracking-[0.4em] text-brand-gold mt-2 text-center"
            >
              The Bridal Masterpiece
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* B. Luxury Interactive Custom Mouse Cursor (Desktop Only) */}
      <div className="hidden lg:block pointer-events-none fixed inset-0 z-50">
        <motion.div
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            scale: isHoveringLink ? 1.8 : 1,
            backgroundColor: isHoveringLink ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0)',
            borderColor: isHoveringLink ? '#f3e2a9' : '#d4af37',
          }}
          transition={{ type: 'spring', stiffness: 450, damping: 28, mass: 0.2 }}
          className="w-6 h-6 rounded-full border border-brand-gold fixed pointer-events-none"
        />
        <motion.div
          animate={{
            x: mousePosition.x - 2,
            y: mousePosition.y - 2,
          }}
          transition={{ type: 'spring', stiffness: 1000, damping: 45 }}
          className="w-1 h-1 rounded-full bg-brand-gold fixed pointer-events-none"
        />
      </div>

      {/* C. Primary App Elements */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Transparent Sticky Navbar */}
          <Header onNavClick={handleNavClick} />

          {/* Section 1: Cinematic Full-Screen Hero */}
          <Hero onNavClick={handleNavClick} />

          {/* Section 2: Two-column Story & Counters About */}
          <About />

          {/* Section 3: Luxury Glass-panel Services */}
          <Services />

          {/* Section 4: Showcase Alternating Masterpieces */}
          <Featured />

          {/* Section 5: Why Choose Us Benefits list */}
          <WhyChooseUs />

          {/* Section 6: Luxury Grid Gallery with Filter and Lightbox */}
          <Gallery />

          {/* Section 7: Bride Testimonials Slider Cards */}
          <Testimonials />

          {/* Section 8: Booking Reservation Request Form */}
          <Contact />

          {/* Section 9: Luxury Golden Thread Footer & Scroll to Top */}
          <Footer onNavClick={handleNavClick} />
        </motion.div>
      )}

    </div>
  );
}
