import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src={scrolled ? "blue_logo_1.png" : "white_logo_1.png"} 
              alt="PESTFX Logo" 
              className="h-10 w-auto object-contain transition-all duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={`tel:${CONTACT_INFO.phone1}`}
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`tel:${CONTACT_INFO.phone1}`}
              className="w-full bg-blue-600 text-white px-3 py-3 rounded-md text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
