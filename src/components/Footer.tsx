import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageCircle, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface FooterProps {
  onNavClick: (selector: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    onNavClick('#home');
  };

  const footerLinks = [
    { label: 'Home', id: '#home' },
    { label: 'About Gaurav', id: '#about' },
    { label: 'Our Services', id: '#services' },
    { label: 'Featured Work', id: '#featured' },
    { label: 'Portfolio Gallery', id: '#gallery' },
    { label: 'Testimonials', id: '#testimonials' },
    { label: 'Book Appointment', id: '#contact' },
  ];

  return (
    <footer className="bg-brand-green-dark border-t border-brand-gold/15 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative floral elements */}
      <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-brand-gold/10">
          
          {/* Column 1: Logo & Tagline (Col Span 5) */}
          <div className="md:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('#home');
              }}
              className="flex items-center gap-2 group cursor-pointer w-fit"
            >
              <div className="w-12 h-12 rounded-sm border border-brand-gold/50 flex items-center justify-center bg-brand-green/30">
                <span className="text-brand-gold font-serif text-xl font-medium">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-brand-gold font-medium tracking-widest text-lg md:text-xl uppercase leading-none">
                  Gaurav
                </span>
                <span className="font-sans text-[10px] text-white/50 tracking-[0.25em] uppercase mt-1">
                  Mehndi Artist
                </span>
              </div>
            </a>
            
            <p className="font-sans text-brand-cream/60 text-xs md:text-sm leading-relaxed max-w-sm font-light">
              Crafting premium, symmetric traditional and contemporary bridal mehndi masterpieces since 2014. Using only premium 100% organic, chemical-free henna formulas for rich, long-lasting color.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram size={16} />, url: 'https://instagram.com' },
                { icon: <Facebook size={16} />, url: 'https://facebook.com' },
                { icon: <MessageCircle size={16} />, url: 'https://wa.me/919800000000' },
                { icon: <Mail size={16} />, url: 'mailto:gaurav.mehndi@example.com' },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-sm border border-brand-gold/20 hover:border-brand-gold hover:text-brand-gold hover:bg-brand-gold/5 flex items-center justify-center text-white/70 transition-all duration-300"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Col Span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-brand-gold text-sm uppercase tracking-wider font-semibold">
              Quick Navigation
            </h4>
            <div className="flex flex-col gap-2.5">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavClick(link.id);
                  }}
                  className="font-sans text-xs text-brand-cream/70 hover:text-brand-gold transition-colors duration-300 w-fit font-light"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Hours (Col Span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-brand-gold text-sm uppercase tracking-wider font-semibold">
              Studio & Availability
            </h4>
            <div className="space-y-3 font-sans text-xs text-brand-cream/70 font-light">
              <p className="flex items-start gap-2">
                <span className="text-brand-gold font-medium shrink-0">Coverage:</span>
                <span>Agra, Rajasthan, Jaipur, Delhi NCR, Lucknow & Destination Weddings</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-brand-gold font-medium">Timing:</span>
                <span>Open 24 Hours (Prior Reservation Required)</span>
              </p>
              <p className="flex items-center gap-2 pt-2 border-t border-brand-gold/5">
                <Phone size={12} className="text-brand-gold" />
                <span>+91 98XXX XXXXX (Booking Help Desk)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-2 gap-4">
          <p className="font-sans text-[10px] text-white/40 tracking-wider">
            &copy; {currentYear} Gaurav Mehndi Artist. All Rights Reserved. &bull; Handcrafted with Luxury & Care
          </p>

          {/* Elegant Scroll to Top Button */}
          <motion.button
            onClick={handleScrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 border border-brand-gold/35 hover:border-brand-gold bg-brand-green/20 rounded-sm text-brand-gold hover:text-white hover:bg-brand-gold/10 font-sans text-[10px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
          >
            <span>Scroll To Top</span>
            <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
