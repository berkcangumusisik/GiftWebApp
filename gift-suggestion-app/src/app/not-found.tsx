import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı - GiftGenius",
  description: "Aradığınız sayfa bulunamadı. Ana sayfaya dönün ve AI destekli hediye önerilerimizi keşfedin.",
  robots: {
    index: false,
    follow: false
  }
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-32 w-28 h-28 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
          {/* 404 Icon */}
          <div className="text-8xl mb-6">🎁</div>
          
          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Sayfa Bulunamadı
          </h1>
          
          <h2 className="text-xl text-gray-300 mb-8">
            Aradığınız hediye önerisi sayfası mevcut değil. Belki yeni bir hediye araması yapmak istersiniz?
          </h2>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              🏠 Ana Sayfaya Dön
            </Link>
            
            <Link
              href="/recommend"
              className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
            >
              🎁 Hediye Önerisi Al
            </Link>
          </div>
          
          {/* Helpful Links */}
          <div className="mt-8 pt-6 border-t border-slate-700/50">
            <p className="text-gray-400 text-sm mb-4">Popüler sayfalar:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/#features" className="text-blue-400 hover:text-blue-300 transition-colors">
                Özellikler
              </Link>
              <Link href="/#how-it-works" className="text-blue-400 hover:text-blue-300 transition-colors">
                Nasıl Çalışır
              </Link>
              <Link href="/favorites" className="text-blue-400 hover:text-blue-300 transition-colors">
                Favorilerim
              </Link>
            </div>
          </div>
        </div>
        
        {/* SEO Help */}
        <div className="mt-8 text-xs text-gray-500 max-w-lg mx-auto">
          <p>
            GiftGenius ile AI destekli hediye önerileri alın. 
            Kişiselleştirilmiş analiz ile sevdikleriniz için en doğru hediyeyi bulun.
          </p>
        </div>
      </div>
    </div>
  );
}
