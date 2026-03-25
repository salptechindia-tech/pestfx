import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONTACT_INFO, HERO_IMAGES } from '../constants';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={HERO_IMAGES[currentImageIndex]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            alt="Pest control background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-900/60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-100 uppercase bg-blue-500/20 border border-blue-400/30 rounded-full backdrop-blur-sm">
              #1 Trusted Pest Control in Chennai
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              Best Pest Control <br />
              <span className="text-blue-400">Services in Chennai</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
              Safe, Effective & Affordable Pest Control Solutions Across Chennai & Tamil Nadu. We protect your home and business from unwanted guests.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                'Serving Chennai & Tamil Nadu',
                'Professional & Safe Treatments',
                'Quick Response'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="text-blue-400 shrink-0" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 group"
              >
                Get Free Inspection <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={20} /> Call Now
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="Customer"
                    className="w-10 h-10 rounded-full border-2 border-blue-900"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-blue-100 text-sm">
                <span className="font-bold text-white">5000+</span> Happy Customers in Chennai
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-[120px] rounded-full -mb-20 -mr-20"></div>
    </section>
  );
};

export default Hero;
