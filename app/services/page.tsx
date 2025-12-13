"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { ChevronRight, Check} from 'lucide-react';
import Image from 'next/image';

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';
const lightBackground = '#F9F9F7';

interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  details: string[]; // Added for Services Page
}

const servicesData: ServiceItem[] = [
  {
    title: "Residential Care",
    description: "We offer family-run Residential Home Care in Melbourne, providing round-the-clock support in a home-like setting.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Residential+Care",
    details: ["24/7 Professional Nursing", "Personalised Care Plans", "Daily Social Activities", "Nutritious Meals & Dining"],
  },
  {
    title: "Dementia Care",
    description: "Our dedicated team provides specialist support and a safe, nurturing environment focusing on dignity and well-being.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Dementia+Care",
    details: ["Specialist Dementia Unit", "Sensory & Cognitive Stimulation", "Safe, Secure Environment", "Trained Memory Care Staff"],
  },
  {
    title: "Respite Care",
    description: "Offering short-term care to give primary caregivers a well-deserved break, ensuring loved ones receive high-quality temporary care.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Respite+Care",
    details: ["Flexible Stay Durations", "Full Access to Amenities", "Rehabilitation Support", "Immediate Placement Availability"],
  },
  {
    title: "Day Care Services",
    description: "Engaging and social day programs for local seniors, providing a stimulating environment and promoting community connection.",
    imageUrl: "https://placehold.co/400x250/ECECEC/6B7B43?text=Day+Care",
    details: ["Transportation Options", "Lunch and Snacks Provided", "Group Activities & Outings", "Family Support Services"],
  },
];


const page = () => {
  return (
    <motion.div 
    key="services"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="pt-32 lg:pt-40"
  >
    {/* Hero Banner for Services */}
    <div className="bg-cover bg-center h-64 flex flex-col items-center justify-center relative" style={{ backgroundImage: `url(https://placehold.co/1600x400/A8996C/4D4C3A?text=Services+Banner)` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-5xl font-light text-white z-10 mb-2 text-shadow-light">Comprehensive Care</h1>
      <p className="relative text-lg text-gray-200 z-10 text-shadow-light">Tailored solutions for every stage of life.</p>
    </div>

    {/* Services Grid */}
    <section className="py-16 lg:py-24" style={{ backgroundColor: lightBackground }}>
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-light mb-12 text-center" style={{ color: primaryColor }}>
          Our Care Programs
        </h2>
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl shadow-lg ${index % 2 === 0 ? 'bg-white' : `bg-gray-50`}`}
            >
              <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1'}>
                <h3 className="text-3xl lg:text-4xl font-light mb-4" style={{ color: primaryColor }}>{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description} We believe in a holistic approach, ensuring physical, emotional, and social needs are met with excellence.</p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Check className="w-5 h-5 mr-3 shrink-0" style={{ color: accentColor }} />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button style={{ backgroundColor: primaryColor }} className="flex items-center text-white px-6 py-3 rounded-full font-medium transition duration-300 hover:opacity-90">
                  Enquire About {service.title} <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2'}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    width={400}
                    height={100}
                    className="w-full h-auto object-cover rounded-xl"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.src = "https://placehold.co/700x500/A8996C/4D4C3A?text=Image+Load+Error"}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.div>
  )
}

export default page