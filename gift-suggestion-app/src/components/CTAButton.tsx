'use client';

import Link from 'next/link';

export default function CTAButton() {
  return (
    <div className="flex flex-col items-center space-y-6 px-4">
      {/* Main CTA Button */}
      <Link
        href="/recommend"
        className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 sm:px-16 sm:py-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold text-xl sm:text-2xl rounded-2xl shadow-2xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500/50 overflow-hidden border border-white/10"
        role="button"
        aria-label="Hediye önerisi almak için tıklayın"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        
        <span className="text-3xl group-hover:animate-bounce relative z-10" role="img" aria-label="hediye kutusu">🎁</span>
        <span className="relative z-10 font-bold">Hediye Önerisi Al!</span>
        <span className="text-2xl animate-pulse relative z-10" role="img" aria-label="yıldız">✨</span>
      </Link>

      {/* Supporting text */}
      <p className="text-base text-gray-300 text-center max-w-md animate-fade-in-up delay-1000 font-medium">
        💡 <span className="text-blue-400">Ücretsiz</span> • 🚀 <span className="text-purple-400">Hızlı</span> • 🎯 <span className="text-pink-400">Kişiselleştirilmiş</span>
      </p>
      
      {/* Trust indicators */}
      <div className="flex items-center space-x-6 text-sm text-gray-400 animate-fade-in-up delay-1200">
        <div className="flex items-center space-x-2">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="font-medium">4.9/5</span>
        </div>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div className="font-medium">1000+ değerlendirme</div>
      </div>
    </div>
  );
}