'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              GiftGenius
            </div>
            <span className="text-lg">🎁</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Özellikler
            </Link>
            <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Nasıl Çalışır
            </Link>
            <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Fiyatlar
            </Link>
            <Link 
              href="/favorites" 
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200 font-medium flex items-center space-x-1"
            >
              <span>❤️</span>
              <span>Favorilerim</span>
            </Link>
            <Link 
              href="/recommend" 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2 rounded-xl font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Başla 🚀
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-10 h-10 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
          <div className="pt-4 space-y-4">
            <Link 
              href="/#features" 
              className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Özellikler
            </Link>
            <Link 
              href="/#how-it-works" 
              className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Nasıl Çalışır
            </Link>
            <Link 
              href="/#pricing" 
              className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fiyatlar
            </Link>
            <Link 
              href="/favorites" 
              className="block text-gray-300 hover:text-pink-400 transition-colors duration-200 font-medium py-2 flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>❤️</span>
              <span>Favorilerim</span>
            </Link>
            <Link 
              href="/recommend" 
              className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold text-center mt-4 hover:scale-105 transition-all duration-200 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Başla 🚀
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}