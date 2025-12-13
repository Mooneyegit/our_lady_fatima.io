"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const lightBackground = '#F9F9F7';

const page = () => {
  return (
      <motion.div 
        key="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-32 lg:pt-40"
    >
      {/* Hero Banner for Contact */}
      <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/4D4C3A/A8996C?text=Contact+Us+Banner)` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <Mail className="relative w-12 h-12 text-white mb-4 z-10" />
        <h1 className="relative text-5xl font-light text-white z-10 text-shadow-light">Get In Touch</h1>
      </div>

      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}
      >
          <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Contact Info Column */}
                  <div className="lg:col-span-1 space-y-8 p-6 rounded-xl shadow-lg" style={{ backgroundColor: lightBackground }}>
                      <h3 className="text-3xl font-light" style={{ color: primaryColor }}>Find Us</h3>
                      
                      <div className="flex items-start">
                          <MapPin className="w-6 h-6 mr-4 shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Address</p>
                              <p className="text-gray-600">70 St. Street Name Rd, Solihull B92 7BP, Melbourne, VIC 3000</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <Phone className="w-6 h-6 mr-4 shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Phone</p>
                              <p className="text-gray-600">Main Line: 123-456-8321</p>
                          </div>
                      </div>

                      <div className="flex items-start">
                          <Mail className="w-6 h-6 mr-4 shrink-0" style={{ color: accentColor }} />
                          <div>
                              <p className="font-semibold" style={{ color: primaryColor }}>Email</p>
                              <p className="text-gray-600">Admissions: info@company.com</p>
                          </div>
                      </div>
                  </div>

                  {/* Contact Form Column */}
                  <div className="lg:col-span-2 p-8 rounded-xl shadow-2xl bg-white">
                      <h3 className="text-3xl font-light mb-6" style={{ color: primaryColor }}>Send Us a Message</h3>
                      <form className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <input type="text" placeholder="Your Full Name" className="p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition" />
                              <input type="email" placeholder="Your Email Address" className="p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition" />
                          </div>
                          <div>
                              <select className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition text-gray-600">
                                  <option value="">I am interested in...</option>
                                  <option value="Residential Care">Residential Care</option>
                                  <option value="Respite Care">Respite Care</option>
                              </select>
                          </div>
                          <div>
                              <textarea placeholder="Your Message" rows={5} className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition"></textarea>
                          </div>
                          <motion.button 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="submit" 
                              style={{ backgroundColor: accentColor, color: primaryColor }} 
                              className="px-8 py-3 rounded-full font-semibold shadow-md transition duration-300 hover:opacity-90"
                          >
                              Submit Enquiry
                          </motion.button>
                      </form>
                  </div>
              </div>
          </div>
      </motion.section>
    </motion.div>
  )
}

export default page