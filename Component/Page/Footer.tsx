"use client"
//import React from 'react'
// import {  Rocket} from 'lucide-react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
// const links = {
//     solutions: [
//         { name: 'Marketing', href: '#' },
//         { name: 'Analytics', href: '#' },
//         { name: 'Automation', href: '#' },
//         { name: 'Commerce', href: '#' },
//         { name: 'Insights', href: '#' },
//     ],
//     support: [
//         { name: 'Submit ticket', href: '#' },
//         { name: 'Documentation', href: '#' },
//         { name: 'Guides', href: '#' },
//     ],
//     company: [
//         { name: 'About', href: '#' },
//         { name: 'Blog', href: '#' },
//         { name: 'Jobs', href: '#' },
//         { name: 'Press', href: '#' },
//     ],
//     legal: [
//         { name: 'Terms of service', href: '#' },
//         { name: 'Privacy policy', href: '#' },
//         { name: 'License', href: '#' },
//     ],
// };

const primaryColor = '#4D4C3A';
const accentColor = '#A8996C';


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
const Footer = () => {
  return (
    //   <footer className="bg-slate-900 border-t border-slate-800">
    //     <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
    //         {/* Main Links Grid */}
    //         <div className="grid grid-cols-2 gap-8 xl:col-span-4 xl:grid-cols-5 border-b border-slate-800 pb-10 mb-10">
    //             {/* Logo and Wave */}
    //             <div className="col-span-2 md:col-span-1 flex justify-start">
    //                 <div className="flex flex-col items-start">
    //                     <Rocket className="h-8 w-8 text-indigo-400" />
    //                     <p className="mt-4 text-sm leading-6 text-slate-400">
    //                         The future of remote work, built today.
    //                     </p>
    //                 </div>
    //             </div>

    //             {/* Navigation Sections */}
    //             <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 col-span-2 md:col-span-4">
    //                 {Object.entries(links).map(([title, linkGroup]) => (
    //                     <div key={title} className="text-sm">
    //                         <h3 className="text-base font-semibold text-white capitalize">{title}</h3>
    //                         <ul role="list" className="mt-4 space-y-4">
    //                             {linkGroup.map((item) => (
    //                                 <li key={item.name}>
    //                                     <a href={item.href} className="text-slate-400 hover:text-white transition duration-200">
    //                                         {item.name}
    //                                     </a>
    //                                 </li>
    //                             ))}
    //                         </ul>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>

    //         {/* Newsletter and Copyright/Social */}
    //         <div className="flex flex-col md:flex-row md:justify-between md:items-end">
    //             {/* Newsletter Signup */}
    //             <div className="mb-8 md:mb-0 max-w-lg">
    //                 <h3 className="text-lg font-semibold text-white">Subscribe to our newsletter</h3>
    //                 <p className="mt-2 text-sm leading-6 text-slate-400">
    //                     The latest news, articles, and resources, sent to your inbox weekly.
    //                 </p>
    //                 <form className="mt-4 flex max-w-md gap-x-4">
    //                     <label htmlFor="email-address" className="sr-only">
    //                         Email address
    //                     </label>
    //                     <input
    //                         id="email-address"
    //                         name="email"
    //                         type="email"
    //                         autoComplete="email"
    //                         required
    //                         className="min-w-0 flex-auto rounded-xl border-0 bg-slate-800/80 px-4 py-2.5 text-white shadow-sm ring-1 ring-inset ring-slate-700 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
    //                         placeholder="Enter your email"
    //                     />
    //                     <button
    //                         type="submit"
    //                         className="flex-none rounded-xl bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible\:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition duration-200"
    //                     >
    //                         Subscribe
    //                     </button>
    //                 </form>
    //             </div>

    //             {/* Copyright and Social Icons */}
    //             <div className="flex flex-col items-start md:items-end">
    //                 <div className="flex space-x-6">
    //                     {/* {[Facebook, Instagram, Github, Youtube, Mail].map((Icon, index) => (
    //                         <a key={index} href="#" className="text-slate-500 hover:text-indigo-400 transition duration-200">
    //                             <span className="sr-only">{Icon.name}</span>
    //                             <Icon className="h-6 w-6" aria-hidden="true" />
    //                         </a>
    //                     ))} */}
    //                 </div>
    //                 <p className="mt-8 text-xs leading-5 text-slate-500">
    //                     &copy; 2024 Your Company, Inc. All rights reserved.
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // </footer>
     <motion.footer 
        style={{ backgroundColor: primaryColor }} 
        className="text-white py-12 px-6 lg:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Logo & Mission */}
            <div className="col-span-2 lg:col-span-1">
              <div className="text-2xl font-bold tracking-widest mb-4">
                <span style={{ color: accentColor }}>Care</span><span className="text-white">Home</span>
              </div>
              <p className="text-sm text-gray-300">
                Providing compassionate, luxury care in the heart of the community. Your loved ones are safe with us.
              </p>
            </div>
    
            {/* Column 2: Quick Links */}
            <div>
              <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Quick Links</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><button className="hover:text-white transition">About Us</button></li>
                <li><button className="hover:text-white transition">Our Services</button></li>
                <li><button className="hover:text-white transition">Life at Home</button></li>
                <li><button className="hover:text-white transition">Careers</button></li>
              </ul>
            </div>
    
            {/* Column 3: Services */}
            <div>
              <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Care Types</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                {servicesData.slice(0, 4).map(s => (
                  <li key={s.title}>{s.title}</li>
                ))}
              </ul>
            </div>
    
            {/* Column 4: Contact */}
            <div>
              <h5 className="font-semibold mb-4 text-lg" style={{ color: accentColor }}>Contact</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 shrink-0" />
                  70 St. Street Name Rd, Solihull B92 7BP
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 shrink-0" />
                  123-456-8321
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 shrink-0" />
                  support@company.com
                </li>
              </ul>
            </div>
          </div>
    
          <div className="mt-12 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CareHome. All rights reserved.
          </div>
        </div>
      </motion.footer>
  )
}

export default Footer