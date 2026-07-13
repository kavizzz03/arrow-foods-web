"use client";
import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF8F5]/80 border-b border-[#EFEBE9] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-2xl font-bold tracking-wide text-[#5D4037]">
            ARROW <span className="text-[#8D6E63]">FOODS</span>
          </span>
          <span className="text-[10px] tracking-widest uppercase text-[#A1887F] font-semibold -mt-1">
            Pure & Traditional
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm text-[#5D4037]">
          <a href="#about" className="hover:text-[#8D6E63] transition-colors duration-200">About</a>
          <a href="#products" className="hover:text-[#8D6E63] transition-colors duration-200">Products</a>
          <a href="#contact" className="hover:text-[#8D6E63] transition-colors duration-200">Contact Us</a>
          <a
            href="https://wa.me/94703872325"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5D4037] text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-[#4E342E] transition-all duration-300 shadow-sm"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#5D4037] focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#EFEBE9] px-6 py-4 space-y-3 absolute w-full left-0 animate-fadeIn">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 text-[#5D4037]">About</a>
          <a href="#products" onClick={() => setIsOpen(false)} className="block py-2 text-[#5D4037]">Products</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 text-[#5D4037]">Contact Us</a>
          <a
            href="https://wa.me/94703872325"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#5D4037] text-white py-2.5 rounded-md text-sm font-semibold"
          >
            Order Via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}