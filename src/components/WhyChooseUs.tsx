import React from 'react';
import { motion } from 'motion/react';
import { WHY_CHOOSE_US } from '../constants';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-4 block">Why PESTFX?</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 leading-tight">
                Committed to Excellence in <br />
                <span className="text-blue-400 text-2xl md:text-3xl">Pest Management</span>
              </h2>
              <p className="text-lg text-blue-100 mb-10 leading-relaxed">
                We don't just spray chemicals; we provide long-term solutions. Our systematic approach ensures that pests are eliminated from the root, giving you peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {WHY_CHOOSE_US.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-blue-800/50 rounded-xl flex items-center justify-center border border-blue-700">
                      <item.icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2">{item.title}</h4>
                      <p className="text-blue-200 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 p-8 rounded-2xl text-center border border-white/5">
                  <p className="text-4xl font-bold text-white mb-2">5k+</p>
                  <p className="text-blue-300 text-sm font-medium">Happy Clients</p>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl text-center border border-white/5">
                  <p className="text-4xl font-bold text-white mb-2">15+</p>
                  <p className="text-blue-300 text-sm font-medium">Service Areas</p>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl text-center border border-white/5">
                  <p className="text-4xl font-bold text-white mb-2">24/7</p>
                  <p className="text-blue-300 text-sm font-medium">Support Available</p>
                </div>
                <div className="bg-white/10 p-8 rounded-2xl text-center border border-white/5">
                  <p className="text-4xl font-bold text-white mb-2">100%</p>
                  <p className="text-blue-300 text-sm font-medium">Safe Solutions</p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-600 rounded-2xl text-center">
                <p className="text-white font-bold text-lg mb-2 italic">"The best termite treatment in Chennai. Highly recommended!"</p>
                <p className="text-blue-200 text-sm">- Rajesh Kumar, Adyar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
