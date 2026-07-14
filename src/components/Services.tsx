import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Crown, Flower2, Gift, Sparkle } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  priceRange: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: 'bridal',
      title: 'Bridal Mehndi',
      subtitle: 'The Royal Masterpiece',
      description: 'Ultra-intricate, symmetric story-telling layouts from fingertips to elbows, customized with beautiful figures, portraits, doli, baraat, and customized wedding date symbols.',
      features: ['Full front & back hands to elbows', 'Custom bride & groom portrait figures', 'Doli & Baraat custom wedding details', 'Organic chemical-free dark stain paste'],
      priceRange: 'Premium Package',
      icon: <Crown className="text-brand-gold w-8 h-8 font-light" />,
    },
    {
      id: 'arabic',
      title: 'Arabic Mehndi',
      subtitle: 'Contemporary Flow',
      description: 'Elegant diagonal trails, leafy branches, geometric lattices, and beautiful floral elements arranged with spacious negative spaces for a modern, high-contrast look.',
      features: ['Elegant bold floral diagonal trails', 'Symmetrical negative space highlights', 'Fingers customized detailing', 'Quick-drying crisp outlines'],
      priceRange: 'Modern Elegance',
      icon: <Flower2 className="text-brand-gold w-8 h-8 font-light" />,
    },
    {
      id: 'traditional',
      title: 'Traditional Mehndi',
      subtitle: 'Classic Indian Heritage',
      description: 'Classic dense Indian layouts featuring beautiful mandalas, peacocks, paisleys, checks, and jaali work, representing timeless heritage with absolute alignment.',
      features: ['Extremely fine & compact layouts', 'Symmetrical mandala centerpieces', 'Traditional wrist bands & sleeves', 'Aromatherapy henna experience'],
      priceRange: 'Heritage Classic',
      icon: <Sparkles className="text-brand-gold w-8 h-8 font-light" />,
    },
    {
      id: 'engagement',
      title: 'Engagement Mehndi',
      subtitle: 'Celebration of Rings',
      description: 'Elegantly proportioned, semi-bridal designs blending fine lines with negative space, custom-styled to display ring ceremony motifs and romantic monograms.',
      features: ['Front & back hands with wrist cuffs', 'Custom initial monograms', 'Ring-focus delicate designs', 'Quick application session'],
      priceRange: 'Elegant Minimal',
      icon: <Heart className="text-brand-gold w-8 h-8 font-light" />,
    },
    {
      id: 'party',
      title: 'Party & Guest Mehndi',
      subtitle: 'Contemporary Accents',
      description: 'Delicate, chic, fast designs customized for bridesmaids, family guests, and children, keeping up with clean minimalist lines and elegant styling.',
      features: ['Front or back hand single trails', 'Chic wristband patterns', 'Fast-dry formulation applied', 'Perfect for bridesmaids & guests'],
      priceRange: 'Bespoke Guest',
      icon: <Gift className="text-brand-gold w-8 h-8 font-light" />,
    },
    {
      id: 'festival',
      title: 'Festival Mehndi',
      subtitle: 'Auspicious Celebrations',
      description: 'Special layouts optimized for festive seasons like Karwa Chauth, Teej, Diwali, Eid, and Rakhi, centering beautiful traditional symbols of blessings.',
      features: ['Symmetrical circular palms designs', 'Festive traditional moon/floral motifs', 'Double hand swift application', 'Special festive season rates'],
      priceRange: 'Festive Bliss',
      icon: <Sparkle className="text-brand-gold w-8 h-8 font-light" />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-brand-green-dark relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-green to-transparent opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-green to-transparent opacity-10" />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/4 w-[500px] h-[500px] bg-brand-gold/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            EXCLUSIVE SERVICES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            Bespoke <span className="text-brand-gold font-light">Mehndi Packages</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light leading-relaxed">
            Every pattern we create is a custom-tailored masterpiece. Browse our curated luxury services designed to match the distinct mood of your special occasion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              className="bg-brand-green/35 p-8 rounded-sm flex flex-col justify-between group transition-all duration-500 border border-brand-gold/15 relative overflow-hidden shadow-xl"
              style={{ minHeight: '380px' }}
            >
              {/* Subtle gold line hover decoration */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-gold/0 group-hover:bg-brand-gold transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-[2px] h-full bg-brand-gold/0 group-hover:bg-brand-gold/20 transition-all duration-500" />

              <div>
                {/* Header info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-green-dark/60 rounded-sm border border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-gold border border-brand-gold/20 px-2.5 py-1 rounded-sm bg-brand-green-dark/30">
                    {service.priceRange}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-white tracking-wider uppercase mb-1 group-hover:text-brand-gold-light transition-colors duration-300 font-medium">
                  {service.title}
                </h3>
                <span className="font-serif italic text-xs text-brand-gold/70 block mb-4">
                  {service.subtitle}
                </span>
                
                <p className="font-sans text-brand-cream/70 text-xs leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              {/* Features bullets */}
              <ul className="space-y-2 pt-4 border-t border-brand-gold/10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-brand-cream/70 font-sans font-light">
                    <span className="w-1 h-1 rounded-full bg-brand-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
