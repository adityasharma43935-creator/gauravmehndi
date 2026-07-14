import React from 'react';
import { motion } from 'motion/react';
import { Palette, Gem, MapPin, Sparkles, UserCheck, CalendarDays } from 'lucide-react';

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      id: 'designs',
      title: 'Professional Designs',
      description: 'Symmetric, meticulous and crisp designs combining age-old Indian motifs, modern negative spaces, and customized figure sketches.',
      icon: <Palette className="w-6 h-6 text-brand-gold" />,
    },
    {
      id: 'quality',
      title: 'Premium Quality',
      description: 'Our organic henna is mixed with therapeutic essential oils, guaranteeing a 100% skin-safe, sweet-scented application with dark stain results.',
      icon: <Gem className="w-6 h-6 text-brand-gold" />,
    },
    {
      id: 'home',
      title: 'Home Service',
      description: 'Relax in the luxury of your own home. Our team travels straight to your venue or house, bringing professional set-ups for comfort.',
      icon: <MapPin className="w-6 h-6 text-brand-gold" />,
    },
    {
      id: 'packages',
      title: 'Affordable Packages',
      description: 'Transparent bespoke pricing packages designed to fit your bridal party budget without compromising a single line of luxury detail.',
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
    },
    {
      id: 'experience',
      title: 'Experienced Artist',
      description: 'Led by Gaurav, with over 12 years of core wedding industry experience serving diverse bridal cultures, preferences, and styles.',
      icon: <UserCheck className="w-6 h-6 text-brand-gold" />,
    },
    {
      id: 'ontime',
      title: 'On-time Booking',
      description: 'Highly organized schedules and punctual artists who arrive fully equipped, ensuring your mehndi ceremony runs perfectly on time.',
      icon: <CalendarDays className="w-6 h-6 text-brand-gold" />,
    },
  ];

  return (
    <section id="why-choose" className="py-24 bg-brand-green-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-green to-transparent opacity-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-green to-transparent opacity-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            OUR DISTINCTION
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            Why Choose <span className="text-brand-gold font-light">Gaurav Mehndi</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light leading-relaxed">
            We don’t just apply henna—we design unforgettable royal experiences centered on safety, comfort, and unmatched fine-line craftsmanship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="p-8 rounded-sm bg-brand-green/35 border border-brand-gold/15 hover:border-brand-gold/30 transition-all duration-500 flex gap-5 group hover:bg-brand-green/45"
            >
              <div className="p-3.5 bg-brand-green-dark/40 rounded-sm border border-brand-gold/15 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/45 transition-all duration-500 h-fit shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-serif text-lg text-white tracking-wide uppercase mb-2 group-hover:text-brand-gold transition-colors duration-300 font-medium">
                  {feature.title}
                </h3>
                <p className="font-sans text-brand-cream/60 text-xs font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
