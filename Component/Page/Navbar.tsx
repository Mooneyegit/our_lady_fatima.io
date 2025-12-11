"use client";

// import { useState } from "react";
//import Link from "next/link";
//import { twMerge } from "tailwind-merge";
//import clsx from "clsx";
//import Image from "next/image";
//import Logo from "@/public/logo/fatima-removebg-preview.png";
import {  Menu, MapPin, Phone, Mail,  } from 'lucide-react';

const accentColor = '#A8996C';
export default function Navbar() {
//   const [open, setOpen] = useState(false);


  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-white">
         {/* Top Contact Bar (Dark Olive Green) */}
    <div style={{ backgroundColor: '#4D4C3A' }} className="hidden lg:flex justify-between items-center py-2 px-12 text-sm">
      <div className="flex space-x-4">
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1 text-gray-300" />
          70 St. Street Name Rd, Solihull B92 7BP
        </span>
      </div>
      <div className="flex space-x-6">
        <span className="flex items-center">
          <Phone className="w-4 h-4 mr-1 text-gray-300" />
          123-456-8321
        </span>
        <span className="flex items-center">
          <Mail className="w-4 h-4 mr-1 text-gray-300" />
          support@company.com
        </span>
      </div>
    </div>

     {/* Main Navigation */}
    <nav className="flex justify-between items-center py-4 px-6 lg:px-12">
      <div className="text-2xl font-bold tracking-widest">
        <span style={{ color: accentColor }}>Fatima</span><span className="text-white">Home</span>
      </div>
      <div className="hidden lg:flex space-x-6 text-sm font-medium">
        <a href="#home" className="hover:text-amber-200 transition">Home</a>
        <a href="#about" className="hover:text-amber-200 transition">About Us</a>
        <a href="#services" className="hover:text-amber-200 transition">Services</a>
        <a href="#life" className="hover:text-amber-200 transition">Life</a>
        <a href="#contact" className="hover:text-amber-200 transition">Contact</a>
      </div>
      <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
    </header>
  );
}
