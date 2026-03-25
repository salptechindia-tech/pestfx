import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ChevronRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Comprehensive Pest Control Services in Tamil Nadu
            </h2>
            <p className="text-lg text-gray-600">
              We offer specialized treatments for all types of pests, ensuring your property remains hygienic and safe.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href="#contact" 
                  className="text-blue-600 font-bold flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Enquire Now <ChevronRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
