import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, Send, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactDetails = [
    {
      id: 'phone',
      label: 'Call Us',
      value: '+91 98XXX XXXXX',
      actionUrl: 'tel:+919800000000',
      icon: <Phone size={18} className="text-brand-gold" />,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+91 98XXX XXXXX',
      actionUrl: 'https://wa.me/919800000000',
      icon: <Smartphone size={18} className="text-brand-gold" />,
    },
    {
      id: 'email',
      label: 'Email Address',
      value: 'gaurav.mehndi@example.com',
      actionUrl: 'mailto:gaurav.mehndi@example.com',
      icon: <Mail size={18} className="text-brand-gold" />,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: '@GauravMehndiArtist',
      actionUrl: 'https://instagram.com',
      icon: <Instagram size={18} className="text-brand-gold" />,
    },
    {
      id: 'address',
      label: 'Studio Address',
      value: 'Agra, Uttar Pradesh, India',
      actionUrl: 'https://maps.google.com',
      icon: <MapPin size={18} className="text-brand-gold" />,
    },
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name';
    if (!formData.phone.trim()) {
      errors.phone = 'Please provide your phone number';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      errors.phone = 'Please provide a valid phone number';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errors.message = 'Please enter a message';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      // Simulate API submit
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      }, 1500);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-green relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-brand-gold/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-brand-gold font-semibold block mb-3">
            BOOKING & ENQUIRIES
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide uppercase leading-tight mb-4 font-medium">
            Begin Your <span className="text-brand-gold font-light">Journey</span>
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold/30 mx-auto mb-6" />
          <p className="font-sans text-brand-cream/70 text-sm font-light leading-relaxed">
            Reserve your wedding date or schedule a custom consultation. Share your event details, and let’s design a masterpiece together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Details Cards (Column Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-2xl text-white uppercase tracking-wider mb-6 font-medium">
                Connect With <span className="text-brand-gold font-light">Gaurav</span>
              </h3>
              <p className="font-sans text-brand-cream/65 text-xs md:text-sm leading-relaxed mb-8 font-light">
                Our customer experience desk is available 24/7 to help you book dates, plan guest counts, or answer questions about stain preparation. Feel free to call, WhatsApp, or drop an email.
              </p>

              {/* Contact Information list */}
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <motion.a
                    key={detail.id}
                    href={detail.actionUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-sm bg-brand-green-dark/40 border border-brand-gold/15 hover:border-brand-gold/30 hover:bg-brand-green-dark/60 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-sm bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-brand-cream/50 uppercase tracking-widest leading-none block mb-1">
                        {detail.label}
                      </span>
                      <span className="font-serif text-white text-sm tracking-wider font-light">
                        {detail.value}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Google Map Box placeholder */}
            <div className="mt-8 p-4 rounded-sm border border-brand-gold/10 bg-brand-green-dark/50 flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 animate-pulse">
                <MapPin size={20} />
              </div>
              <div>
                <h5 className="font-serif text-white text-xs uppercase tracking-wider font-medium">Service Coverage</h5>
                <p className="font-sans text-brand-cream/50 text-[10px] leading-relaxed font-light">
                  Serving Agra, Jaipur, Delhi NCR, Lucknow, and destination weddings globally.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Glass Booking Form (Column Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-brand-green-dark/50 p-8 md:p-10 rounded-sm border border-brand-gold/15 relative overflow-hidden shadow-xl" id="booking-form-panel">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    noValidate
                  >
                    <h3 className="font-serif text-xl text-white uppercase tracking-wider mb-8 font-medium">
                      Request Consultation
                    </h3>

                    {/* Name Input */}
                    <div>
                      <label className="font-sans text-[10px] text-brand-gold uppercase tracking-[0.15em] font-medium block mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Aditi Sharma"
                        className="w-full px-4 py-3 bg-brand-green/20 text-brand-cream placeholder-brand-cream/30 border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-sm text-xs transition-colors duration-300 font-sans"
                      />
                      {formErrors.name && (
                        <p className="text-red-400 font-sans text-[10px] mt-1.5 font-light">
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Grid for Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Phone Input */}
                      <div>
                        <label className="font-sans text-[10px] text-brand-gold uppercase tracking-[0.15em] font-medium block mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 99999 99999"
                          className="w-full px-4 py-3 bg-brand-green/20 text-brand-cream placeholder-brand-cream/30 border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-sm text-xs transition-colors duration-300 font-sans"
                        />
                        {formErrors.phone && (
                          <p className="text-red-400 font-sans text-[10px] mt-1.5 font-light">
                            {formErrors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="font-sans text-[10px] text-brand-gold uppercase tracking-[0.15em] font-medium block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. aditi@example.com"
                          className="w-full px-4 py-3 bg-brand-green/20 text-brand-cream placeholder-brand-cream/30 border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-sm text-xs transition-colors duration-300 font-sans"
                        />
                        {formErrors.email && (
                          <p className="text-red-400 font-sans text-[10px] mt-1.5 font-light">
                            {formErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message Box */}
                    <div>
                      <label className="font-sans text-[10px] text-brand-gold uppercase tracking-[0.15em] font-medium block mb-2">
                        Event Details & Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        placeholder="Please include wedding date, venue, guest counts, and design preferences..."
                        className="w-full px-4 py-3 bg-brand-green/20 text-brand-cream placeholder-brand-cream/30 border border-brand-gold/15 focus:border-brand-gold focus:outline-none rounded-sm text-xs transition-colors duration-300 font-sans resize-none"
                      />
                      {formErrors.message && (
                        <p className="text-red-400 font-sans text-[10px] mt-1.5 font-light">
                          {formErrors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-brand-gold border border-brand-gold text-brand-green-dark hover:bg-transparent hover:text-brand-gold font-sans text-xs uppercase tracking-[0.15em] font-semibold rounded-sm transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-green-dark border-t-transparent rounded-full animate-spin" />
                          <span>Processing reservation...</span>
                        </>
                      ) : (
                        <>
                          <Send size={12} />
                          <span>Request Booking Details</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-16 space-y-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-16 h-16 rounded-sm bg-brand-gold/10 border border-brand-gold flex items-center justify-center text-brand-gold"
                    >
                      <CheckCircle size={32} />
                    </motion.div>
                    
                    <div>
                      <h4 className="font-serif text-2xl text-white uppercase tracking-wider mb-3">
                        Thank You!
                      </h4>
                      <p className="font-sans text-brand-cream/80 text-sm max-w-sm leading-relaxed font-light">
                        We have successfully received your request. Gaurav’s bridal relationship desk will contact you soon.
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-green-dark font-sans text-[10px] uppercase tracking-[0.15em] font-medium transition-all duration-500 rounded-sm cursor-pointer"
                    >
                      Submit another request
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
