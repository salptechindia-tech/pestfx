import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="pestfx3.png" 
                alt="Professional pest control service in Chennai"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-3xl -z-0 hidden md:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-blue-100 rounded-3xl -z-10 translate-x-10 translate-y-10 hidden lg:block"></div>
            
            <div className="absolute top-10 right-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
              <p className="text-4xl font-bold text-blue-900">10+</p>
              <p className="text-sm text-gray-500 font-medium">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">About PESTFX</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              One of the most trusted <span className="text-blue-600">pest control service providers in Chennai</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              PESTFX INDIA PRIVATE LIMITED is a premier pest management company dedicated to providing reliable pest control services across Tamil Nadu. We understand the unique challenges posed by the tropical climate of Chennai and offer tailored solutions that work.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our mission is to create pest-free environments for homes and businesses using advanced technology and eco-friendly methods. With a focus on safety, professionalism, and local expertise, we have become the go-to choice for thousands of residents in Chennai.
            </p>

            <div className="space-y-4 mb-10">
              {[
                'Government Approved Chemicals',
                'Certified & Background Checked Staff',
                'Transparent Pricing with No Hidden Costs',
                '100% Satisfaction Guarantee'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <CheckCircle2 className="text-blue-600" size={18} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-950 transition-colors shadow-lg"
            >
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
