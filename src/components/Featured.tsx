import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import figuresImage from '../assets/images/mehndi_figures_1784045484243.jpg';
import traditionalImage from '../assets/images/mehndi_traditional_1784045452077.jpg';

export default function Featured() {
  const works = [
    {
      id: '01',
      title: 'The Royal Bridal Portraits',
      category: 'Signature Bridal Design',
      description: 'A grand architectural-inspired bridal mehndi showcasing symmetrical, hand-drawn silhouettes of the bride and groom standing inside elegant temple arches. Includes customized symbols of doli and shehnai, surrounded by delicate foliage trails and intricate lace bands.',
      details: ['Over 18 hours of detailed planning & curation', 'Rajasthani style hand-drawn silhouettes', 'Organic dark stain results'],
      image: figuresImage,
    },
    {
      id: '02',
      title: 'The Peacock Mandala Symphony',
      category: 'Traditional Indian Art',
      description: 'An elegant traditional masterpiece centering dual symmetric peacocks with gorgeous feather plumes on the palms, extending into a sequence of concentric mandalas and fine wristbands on the forearms. Features crisp line weights and absolute alignment.',
      details: ['Highly dense traditional Indian pattern', 'Custom peacock feathers detailing', 'Divine eucalyptus aromatic finish'],
      image: traditionalImage,
    },
  ];

  return (
    <section id="featured" className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Background details */}
      <div className="absolute right-10 bottom-1/4 w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-10 top-1/4 w-[400px] h-[400px] bg-brand-gold/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="max-w-3xl mb-24">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            MASTERPIECE PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            Featured <span className="text-brand-gold font-light">Work Showcase</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light max-w-xl">
            A deeper look at our signature, award-winning mehndi designs. Each design takes hours of patient craftsmanship, ensuring a beautiful visual story.
          </p>
        </div>

        {/* Featured Showcase List */}
        <div className="space-y-32">
          {works.map((work, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={work.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Showcase Card (Column Span 6) */}
                <div
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative aspect-[4/5] rounded-sm overflow-hidden group shadow-2xl border border-brand-gold/15 bg-brand-green-dark"
                  >
                    {/* Layered luxury borders */}
                    <div className="absolute inset-5 border border-brand-gold/20 group-hover:border-brand-gold/45 z-10 pointer-events-none transition-all duration-700" />
                    
                    <img
                       src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark premium gradient cover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/80 via-brand-green-dark/20 to-transparent opacity-85" />
                  </motion.div>
                </div>

                {/* Text Description Block (Column Span 6) */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Work Serial Number */}
                    <div className="font-mono text-xs text-brand-gold font-medium mb-4 flex items-center gap-2">
                      <Star size={12} className="fill-brand-gold" />
                      <span>FEATURED MASTERPIECE {work.id}</span>
                    </div>

                    <span className="font-sans text-[11px] uppercase tracking-widest text-brand-gold font-semibold mb-2 block">
                      {work.category}
                    </span>
                    
                    <h3 className="font-serif text-2xl md:text-4xl text-white tracking-wide uppercase leading-tight mb-6 font-medium">
                      {work.title}
                    </h3>

                    <p className="font-sans text-brand-cream/80 text-sm leading-relaxed mb-6 font-light">
                      {work.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-3 mb-8 border-t border-brand-gold/15 pt-6">
                      {work.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-3 text-xs text-brand-cream/70 font-sans font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Styled Link button */}
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-sans text-xs text-brand-gold uppercase tracking-[0.15em] font-medium hover:text-brand-gold-light transition-colors duration-300 group py-1 border-b border-brand-gold/20 hover:border-brand-gold-light"
                    >
                      <span>Consult for this design</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
