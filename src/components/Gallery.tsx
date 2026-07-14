import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GalleryItem } from '../types';

// Importing generated images
import imgHero from '../assets/images/mehndi_hero_1784045414813.jpg';
import imgBridal from '../assets/images/mehndi_bridal_1784045431694.jpg';
import imgTraditional from '../assets/images/mehndi_traditional_1784045452077.jpg';
import imgArabic from '../assets/images/mehndi_arabic_1784045469272.jpg';
import imgFigures from '../assets/images/mehndi_figures_1784045484243.jpg';

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'item-1',
      title: 'Royal Bridal Portrait',
      category: 'bridal',
      image: imgFigures,
      description: 'An exquisite hand-drawn illustration of the bride and groom, framed by intricate temple pillars and micro-dot lace details on the palms.',
    },
    {
      id: 'item-2',
      title: 'Intricate Bridal Arms',
      category: 'bridal',
      image: imgBridal,
      description: 'Detailed symmetrical extensions climbing up the forearm, integrating traditional Rajasthani patterns, peacocks, and floral cuffs.',
    },
    {
      id: 'item-3',
      title: 'The Sovereign Mandala',
      category: 'traditional',
      image: imgTraditional,
      description: 'A traditional Indian layout utilizing high-precision linework, concentric sacred geometric mandalas, and wrist bracelet finishes.',
    },
    {
      id: 'item-4',
      title: 'Modern Arabic Vine',
      category: 'arabic',
      image: imgArabic,
      description: 'A contemporary blend of thick leaf borders and delicate internal floral paths, leaving clean skin highlights to form striking contrast.',
    },
    {
      id: 'item-5',
      title: 'Aromatic Henna Prep',
      category: 'traditional',
      image: imgHero,
      description: 'A close-up shot capturing the incredible density and precision of fine-line detailing under luxury warm bridal lighting.',
    },
  ];

  // Filtered Items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Lightbox Navigation
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    const currentFilteredItems = galleryItems; // Navigate within full set for simplicity
    setActiveLightboxIndex(prev => 
      prev !== null && prev > 0 ? prev - 1 : currentFilteredItems.length - 1
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex === null) return;
    const currentFilteredItems = galleryItems;
    setActiveLightboxIndex(prev => 
      prev !== null && prev < currentFilteredItems.length - 1 ? prev + 1 : 0
    );
  };

  const categories = [
    { value: 'all', label: 'All Masterpieces' },
    { value: 'bridal', label: 'Bridal Henna' },
    { value: 'arabic', label: 'Arabic Flow' },
    { value: 'traditional', label: 'Traditional Mandalas' },
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] bg-brand-gold/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            FINE ART PORTFOLIO
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            The Luxury <span className="text-brand-gold font-light">Gallery</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light leading-relaxed">
            Click on any image to step into the details. Each photograph captures the crisp stain, delicate geometry, and fluid curves of Gaurav’s creations.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-16" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 font-sans text-[10px] md:text-xs uppercase tracking-widest transition-all duration-500 rounded-sm cursor-pointer ${
                filter === cat.value
                  ? 'bg-brand-gold text-brand-green-dark font-medium border border-brand-gold'
                  : 'bg-transparent text-brand-cream/80 border border-brand-gold/20 hover:border-brand-gold hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Luxury Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              // Get original index for correct lightbox navigation
              const originalIndex = galleryItems.findIndex(gi => gi.id === item.id);
              
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveLightboxIndex(originalIndex)}
                  className={`relative cursor-pointer rounded-sm overflow-hidden group shadow-lg border border-brand-gold/15 bg-brand-green-dark/40 ${
                    item.id === 'item-1' ? 'lg:col-span-1 lg:row-span-2' : ''
                  }`}
                >
                  {/* Outer double gold frame detail on hover */}
                  <div className="absolute inset-4 border border-brand-gold/0 group-hover:border-brand-gold/35 z-20 pointer-events-none transition-all duration-700 rounded-sm" />
                  
                  {/* Image container with ratio */}
                  <div className={`relative overflow-hidden w-full h-full ${
                    item.id === 'item-1' ? 'aspect-[3/4] lg:aspect-auto lg:h-[720px]' : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-brand-green-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 z-10">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-4 hover:bg-brand-gold hover:text-brand-green-dark transition-all">
                          <Eye size={18} />
                        </div>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-brand-gold font-semibold block mb-1">
                          {item.category} Masterpiece
                        </span>
                        <h4 className="font-serif text-xl text-white tracking-wide uppercase mb-2 font-medium">
                          {item.title}
                        </h4>
                        <p className="font-sans text-brand-cream/60 text-xs leading-relaxed font-light line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Immersive Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-brand-green-dark/98 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            {/* Close button top right */}
            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-brand-gold hover:scale-110 transition-all p-3 rounded-sm border border-white/10 hover:border-brand-gold bg-brand-green-dark"
            >
              <X size={22} />
            </button>

            {/* Lightbox Content Container */}
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-green border border-brand-gold/20 p-6 rounded-sm relative">
              
              {/* Image Column */}
              <div 
                className="lg:col-span-8 relative flex items-center justify-center h-[50vh] lg:h-[70vh] rounded-sm overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Navigation Chevron Left */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-40 text-brand-gold hover:text-white p-3 rounded-full border border-brand-gold/20 hover:border-brand-gold bg-brand-green-dark/80 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronLeft size={24} />
                </button>

                <img
                  src={galleryItems[activeLightboxIndex].image}
                  alt={galleryItems[activeLightboxIndex].title}
                  className="max-h-full max-w-full object-contain rounded-sm"
                  referrerPolicy="no-referrer"
                />

                {/* Navigation Chevron Right */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-40 text-brand-gold hover:text-white p-3 rounded-full border border-brand-gold/20 hover:border-brand-gold bg-brand-green-dark/80 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Text Description Column */}
              <div 
                className="lg:col-span-4 text-left flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-brand-gold/20 pt-6 lg:pt-0 lg:pl-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-4 h-[1px] bg-brand-gold" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                    {galleryItems[activeLightboxIndex].category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
                  {galleryItems[activeLightboxIndex].title}
                </h3>

                <p className="font-sans text-brand-cream/85 text-sm leading-relaxed mb-6 font-light">
                  {galleryItems[activeLightboxIndex].description}
                </p>

                <div className="p-4 bg-brand-green-dark/50 rounded-sm border border-brand-gold/15 mt-4">
                  <span className="font-serif text-brand-gold text-xs uppercase tracking-wider block mb-1">
                    Authentic Guarantee
                  </span>
                  <p className="font-sans text-brand-cream/60 text-[11px] leading-relaxed font-light">
                    This design was fully hand-crafted by Gaurav and can be customized according to your bridal theme and color preferences.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
