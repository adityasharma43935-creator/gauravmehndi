import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, Heart } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Aditi Sharma',
      role: 'Royal Bride',
      location: 'Umaid Bhawan Palace, Jodhpur',
      quote: 'Gaurav is a true magician! My bridal mehndi was exactly what I had dreamed of—highly detailed, symmetrical, and featuring our custom portrait figures. The eucalyptus aroma of his fresh organic henna paste was so calming, and the stain became an incredibly deep, rich mahogany color that stayed for almost two weeks. Highly recommended!',
      rating: 5,
      date: 'December 2025',
    },
    {
      id: 'test-2',
      name: 'Priyanka Patel',
      role: 'Contemporary Bride',
      location: 'Grand Hyatt, Goa',
      quote: 'If you want premium, luxury-grade mehndi work, look no further than Gaurav. He was extremely patient, spending hours to draw a symmetrical mandala on my palms with immaculate precision. All my guests were stunned by how clean and fine his lines were. He is exceptionally professional and a complete gentleman.',
      rating: 5,
      date: 'November 2025',
    },
    {
      id: 'test-3',
      name: 'Meera Deshmukh',
      role: 'Festive Client',
      location: 'Taj Lands End, Mumbai',
      quote: 'We booked Gaurav for our entire family’s Karwa Chauth festival ceremony. His designs were incredibly unique, marrying modern Arabic spacing with royal Indian motifs. His home-service setup was so organized and clean, keeping everyone comfortable. Looking forward to booking him for all our upcoming wedding events!',
      rating: 5,
      date: 'October 2025',
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-brand-green-dark relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-green to-transparent opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-green to-transparent opacity-10" />
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            LOVING WORDS FROM CLIENTS
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            Bride <span className="text-brand-gold font-light">Testimonials</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light leading-relaxed">
            Discover why so many families trust Gaurav to bring fine-line elegance and beautiful blessings to their most sacred life celebrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-sm bg-brand-green/35 border border-brand-gold/15 flex flex-col justify-between group transition-all duration-500 relative"
            >
              {/* Quote bubble icon top right */}
              <div className="absolute top-6 right-6 text-brand-gold/10 group-hover:text-brand-gold/20 transition-all duration-500">
                <Quote size={40} className="transform rotate-180" />
              </div>

              <div>
                {/* Five star rating */}
                <div className="flex items-center gap-1 mb-6 text-brand-gold">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-gold" />
                  ))}
                </div>

                {/* Testimonial text quote */}
                <p className="font-sans text-brand-cream/80 text-xs md:text-sm leading-relaxed mb-8 italic font-light">
                  "{test.quote}"
                </p>
              </div>

              {/* Bride Bio details */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-gold/10">
                <div className="w-10 h-10 rounded-sm bg-brand-green-dark/40 border border-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Heart size={16} className="fill-brand-gold/10" />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm uppercase tracking-wider font-semibold">
                    {test.name}
                  </h4>
                  <div className="flex flex-col text-[10px] text-brand-gold/70 font-sans font-light tracking-wider">
                    <span>{test.role} &bull; {test.location}</span>
                    <span className="text-white/40">{test.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
