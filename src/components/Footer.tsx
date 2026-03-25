import React from 'react';
import { CONTACT_INFO, SERVICES } from '../constants';
import { Instagram, Facebook, Twitter, Linkedin, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-black tracking-tighter text-white">
                PESTFX
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              PESTFX INDIA PRIVATE LIMITED is a leading pest control service provider in Chennai and Tamil Nadu. We provide eco-friendly and safe solutions for homes and businesses.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              {SERVICES.slice(0, 5).map(s => (
                <li key={s.id}><a href="#services" className="hover:text-white transition-colors">{s.title}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">A:</span>
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">P:</span>
                <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-white transition-colors">+{CONTACT_INFO.phone1}</a>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-500 font-bold">E:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PESTFX INDIA PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <ShieldCheck size={16} className="text-blue-500" />
            <span>Pest Control Chennai | Pest Control Tamil Nadu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
