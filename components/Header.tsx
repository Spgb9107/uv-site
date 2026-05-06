'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      {/* Top Announcement Bar */}
      <div className="bg-accent-dark text-white text-center py-2 text-sm font-medium tracking-wide">
        🎬 Free Shipping on Orders Over $50 | Use Code: <span className="text-primary-400 font-bold">USKEY20</span> for 20% Off
      </div>

      {/* Main Navigation */}
      <nav className="container-max">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-black text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
              U
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-accent-dark tracking-tight">USKEYVISION</span>
              <span className="block text-[10px] text-gray-400 font-medium tracking-widest uppercase -mt-1">Pro Creator Gear</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/#products" className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors relative group">
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#features" className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/#scenarios" className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors relative group">
              Scenarios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/products" className="btn-primary text-sm !px-6 !py-2.5">
              Shop Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
              <Link href="/#products" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-500 py-2">Products</Link>
              <Link href="/#features" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-500 py-2">Features</Link>
              <Link href="/#scenarios" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-500 py-2">Scenarios</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-500 py-2">About Us</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-gray-700 hover:text-primary-500 py-2">Contact</Link>
              <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="btn-primary text-center mt-2">Shop Now</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
