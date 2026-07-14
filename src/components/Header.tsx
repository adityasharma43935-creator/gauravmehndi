import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Award } from 'lucide-react';

interface HeaderProps {
  onNavClick: (selector: string) => void;
}

export default function Header({ onNavClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: '#home' },
    { label: 'About', id: '#about' },
    { label: 'Services', id: '#services' },
    { label: 'Featured Work', id: '#featured' },
    { label: 'Gallery', id: '#gallery' },
    { label: 'Testimonials', id: '#testimonials' },
    { label: 'Contact', id: '#contact' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-green-dark/90 backdrop-blur-md py-4 border-b border-brand-gold/10 shadow-lg'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Section */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick('#home');
          }}
          className="flex items-center gap-2 group cursor-pointer"
          id="header-logo"
        >
          <div className="w-10 h-10 rounded-full border border-brand-gold/50 flex items-center justify-center bg-brand-green/30 group-hover:border-brand-gold transition-all duration-500">
            <span className="text-brand-gold font-serif text-lg font-medium">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-brand-gold font-medium tracking-widest text-base md:text-lg leading-tight uppercase group-hover:text-brand-gold-light transition-colors duration-300">
              Gaurav
            </span>
            <span className="font-sans text-[10px] text-white/60 tracking-[0.25em] uppercase leading-none">
              Mehndi Artist
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.id);
              }}
              className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-cream/80 hover:text-brand-gold transition-colors duration-300 relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleItemClick('#contact')}
            className="px-6 py-2.5 border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-[0.15em] font-medium hover:bg-brand-gold hover:text-brand-green-dark transition-all duration-500 rounded-sm cursor-pointer"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-brand-gold hover:text-brand-gold-light focus:outline-none p-2 rounded-sm border border-brand-gold/20 bg-brand-green-dark/60"
          id="mobile-menu-btn"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-[73px] left-0 w-full bg-brand-green-dark/95 backdrop-blur-lg border-b border-brand-gold/20 transition-all duration-500 ease-in-out z-40 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[450px] opacity-100 py-6 shadow-2xl' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 gap-5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item.id);
              }}
              className="font-sans text-xs uppercase tracking-[0.2em] text-brand-cream/80 hover:text-brand-gold transition-colors duration-300 py-2 border-b border-brand-gold/10"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => handleItemClick('#contact')}
            className="w-full mt-2 py-3 border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-[0.15em] font-medium text-center rounded-sm hover:bg-brand-gold hover:text-brand-green-dark transition-all duration-500 cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}
