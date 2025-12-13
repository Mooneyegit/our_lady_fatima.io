"use client";

import { useState } from "react";
import { Menu, X, MapPin, Phone, Mail } from "lucide-react";

const accentColor = "#A8996C";
interface NavLink {
  key: string;
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about", label: "About Us" },
  { key: "services", href: "/service", label: "Services" },
  { key: "life", href: "/life", label: "Life" },
  { key: "contact", href: "/contact", label: "Contact" }
];


export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-10 text-white">
      {/* Top Contact Bar (Desktop Only) */}
      <div
        style={{ backgroundColor: "#4D4C3A" }}
        className="hidden lg:flex justify-between items-center py-2 px-12 text-sm"
      >
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
          <span style={{ color: accentColor }}>Fatima</span>
          <span className="text-white">Home</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-amber-200 transition">Home</a>
          <a href="/about" className="hover:text-amber-200 transition">About Us</a>
          <a href="/services" className="hover:text-amber-200 transition">Services</a>
          <a href="/blog" className="hover:text-amber-200 transition">Life</a>
          <a href="/contact" className="hover:text-amber-200 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(prev => !prev)}
          className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ backgroundColor: "#4D4C3A" }}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
          {/* {["home", "about", "services", "life", "contact"].map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="hover:text-amber-200 transition"
            >
              {link === "about" ? "About Us" : link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))} */}
          {navLinks.map((link: NavLink) => (
  <a
    key={link.key}
    href={link.href}
    onClick={() => setOpen(false)}
    className="hover:text-amber-200 transition"
  >
    {link.label}
  </a>
))}
        </div>
      </div>
    </header>
  );
}
