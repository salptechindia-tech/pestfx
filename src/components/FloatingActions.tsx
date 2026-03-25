import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingActions = () => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group animate-bounce-slow"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100">
          Chat with us
        </span>
      </a>

      {/* Sticky Call Button for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-100 p-4 flex gap-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]">
        <a
          href={`tel:${CONTACT_INFO.phone1}`}
          className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          <Phone size={20} /> Call Now
        </a>
        <a
          href="#contact"
          className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform"
        >
          Enquire Now
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
