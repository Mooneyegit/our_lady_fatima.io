"use client";

import { useState } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* top bar */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            MyBrand
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>

          {/* Mobile icon */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu section */}
      <div 
        className={twMerge(
          clsx(
            "md:hidden flex flex-col bg-white shadow-md transition-all duration-300 overflow-hidden items-center justify-center",
            open ? "max-h-96 py-4" : "max-h-0"
          )
        )}
      >
        <NavLinkMobile href="/">Home</NavLinkMobile>
        <NavLinkMobile href="/about">About</NavLinkMobile>
        <NavLinkMobile href="/services">Services</NavLinkMobile>
        <NavLinkMobile href="/contact">Contact</NavLinkMobile>
      </div>
    </nav>
  );
}

/* -------- Reusable nav links ---------- */
interface NavProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavProps) {
  return (
    <Link href={href} className="hover:text-blue-600 transition">
      {children}
    </Link>
  );
}

function NavLinkMobile({ href, children }: NavProps) {
  return (
    <Link
      href={href}
      className="px-4 py-2 border-b text-gray-700 hover:bg-gray-100"
    >
      {children}
    </Link>
  );
}
