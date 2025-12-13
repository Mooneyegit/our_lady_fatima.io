"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const lightBackground = '#F9F9F7';

const page = () => {
  return (
      <motion.div 
    key="about"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-32 lg:pt-40"
  >
    {/* Hero Banner for About */}
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cover bg-center h-64 flex items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/4D4C3A/A8996C?text=About+Us+Banner)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-5xl font-light text-white z-10 text-shadow-light">Our Story</h1>
    </motion.div>

    {/* Content Section 1: Our Philosophy */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl lg:text-5xl font-light mb-6" style={{ color: primaryColor }}>
              A Home, Not Just a Residence
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed italic border-l-4 pl-4" style={{ borderColor: accentColor }}>
              "The quality of life should never diminish with age. We are dedicated to ensuring every day is lived with dignity, comfort, and engagement." - The Founder's Motto
            </p>
            <button style={{ backgroundColor: accentColor, color: primaryColor }} className="flex items-center px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
              Meet Our Team <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://placehold.co/700x500/A8996C/4D4C3A?text=Founders+Image"
              alt="Care Home Founders"
              className="w-full h-auto object-cover"
              width={100}
              height={100}
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/700x500/A8996C/4D4C3A?text=Image+Load+Error"}
            />
          </div>
        </div>
      </div>
    </motion.section>

    {/* Content Section 2: Values */}
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h3 className="text-4xl lg:text-5xl font-light mb-12" style={{ color: primaryColor }}>
          The Pillars of Our Care
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Dignity", "Compassion", "Excellence"].map((value, index) => (
            <motion.div 
              key={value}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <h4 className="text-2xl font-semibold mb-3" style={{ color: accentColor }}>{value}</h4>
              <p className="text-gray-600">
                {value === "Dignity" && "Respecting the individuality and personal history of every resident, ensuring all care is provided with the utmost discretion and respect."}
                {value === "Compassion" && "Our team delivers care with true heart, empathy, and kindness, recognizing the emotional needs alongside the physical ones."}
                {value === "Excellence" && "We are committed to continuous improvement, maintaining the highest standards in clinical care, facilities, and staff training."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  </motion.div>
  )
}

export default page