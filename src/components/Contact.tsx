import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, MessageCircle, AlertCircle } from 'lucide-react';
import { CONTACT_INFO, SERVICES } from '../constants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS credentials missing. Falling back to WhatsApp only.');
      // If credentials are missing, we still proceed with WhatsApp for user experience
      // but we log it for the developer.
    }

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            service_requested: formData.service,
            message: formData.message,
            to_email: 'support@pestfx.in'
          },
          publicKey
        );
      }

      setIsSubmitting(false);
      setSubmitted(true);
      
      // Construct WhatsApp message
      const whatsappMsg = `New Enquiry from PESTFX Website:%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMsg}`;
      
      // Open WhatsApp after a short delay to let user see success state
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);

    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send email. Please try again or contact us via WhatsApp.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-4 block">Contact Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
                Get a Free Inspection & <br />
                <span className="text-blue-600">Expert Consultation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Ready to get rid of pests? Fill out the form or call us directly. Our experts are standing by to help you secure your property.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Call Us</h4>
                    <p className="text-gray-600 mb-1">
                      <a href={`tel:${CONTACT_INFO.phone1}`} className="hover:text-blue-600 transition-colors">+{CONTACT_INFO.phone1}</a>
                    </p>
                    <p className="text-gray-600">
                      <a href={`tel:${CONTACT_INFO.phone2}`} className="hover:text-blue-600 transition-colors">+{CONTACT_INFO.phone2}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Email Us</h4>
                    <p className="text-gray-600">
                      <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-blue-600 transition-colors">{CONTACT_INFO.email}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold mb-1">Visit Us</h4>
                    <p className="text-gray-600 max-w-xs">{CONTACT_INFO.address}</p>
                  </div>
                </div>
              </div>

              {/* Map Embed Placeholder */}
              <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-inner bg-gray-100 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124361.406529322!2d80.156430!3d13.082680!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d333f%3A0x6d3e707106521737!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PESTFX Chennai Location"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h3>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="text-green-600" size={40} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600 mb-8">Your enquiry has been received. We'll contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-100 text-red-600 px-4 py-3 rounded-xl flex items-center gap-3 text-sm">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Select Service</label>
                    <select 
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option value="">Choose a service...</option>
                      {SERVICES.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                    <textarea 
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your pest problem..."
                      className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-blue-900/20 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Enquire Now'} <Send size={20} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
