import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CTAButton from '@/components/CTAButton';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import StructuredData, { FAQStructuredData } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
  description: "Yapay zeka destekli hediye önerisi platformu. Sevdikleriniz için en uygun hediyeyi bulun. Kişiselleştirilmiş AI analizi ile doğru hediye seçimi artık çok kolay.",
  keywords: [
    "hediye önerisi", "AI hediye", "yapay zeka hediye", "hediye bulma", "hediye fikirler",
    "doğum günü hediyesi", "sevgiliye hediye", "anneye hediye", "babaya hediye"
  ],
  openGraph: {
    title: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
    description: "Yapay zeka ile en doğru hediyeyi keşfet! Sevdikleriniz için kişiselleştirilmiş hediye önerileri alın.",
    url: "https://giftgenius.app",
    type: "website"
  },
  twitter: {
    title: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
    description: "Yapay zeka ile en doğru hediyeyi keşfet! Sevdikleriniz için kişiselleştirilmiş hediye önerileri alın."
  },
  alternates: {
    canonical: "https://giftgenius.app"
  }
};

export default function Home() {
  return (
    <>
      {/* FAQ Structured Data */}
      <StructuredData data={FAQStructuredData} />
      
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center">
          <Hero />
        </section>
        
        {/* CTA Section */}
        <section className="pb-8">
          <CTAButton />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" aria-label="Nasıl Çalışır">
          <HowItWorks />
        </section>
        
        {/* Features Section */}
        <section id="features" aria-label="Özellikler">
          <Features />
        </section>

        {/* Pricing Section */}
        <section id="pricing" aria-label="Fiyatlandırma">
          <Pricing />
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
          {/* Subtle background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute top-32 right-32 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-32 w-28 h-28 bg-pink-500/10 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-32 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-3000"></div>
          </div>
          
          {/* Content with improved readability */}
          <div className="text-center space-y-10 px-4 relative z-10 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/30">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-lg">
                Hemen Başla! 🚀
              </h2>
              <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto font-semibold leading-relaxed">
                Binlerce mutlu kullanıcımıza katıl ve yapay zeka ile mükemmel hediyeyi keşfet!
              </p>
            </div>
            
            <div className="inline-block transform hover:scale-105 transition-transform duration-300">
              <CTAButton />
            </div>
            
            {/* Trust badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-xl py-3 px-4 border border-slate-700/30">
                <span className="text-2xl">🔒</span>
                <span className="font-semibold">100% Güvenli</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-xl py-3 px-4 border border-slate-700/30">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Anında Sonuç</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-xl py-3 px-4 border border-slate-700/30">
                <span className="text-2xl">🆓</span>
                <span className="font-semibold">Tamamen Ücretsiz</span>
              </div>
            </div>
          </div>
        </section>

        {/* Compact Footer */}
        <footer className="bg-slate-900 text-white py-8 px-4 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Logo and tagline */}
              <div className="text-center md:text-left">
                <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  GiftGenius
                </div>
                <p className="text-gray-400 text-sm mt-1">
                  AI destekli hediye platformu
                </p>
              </div>
              
              {/* Features */}
              <div className="flex space-x-6 text-sm text-gray-400">
                <span>🔒 Güvenli</span>
                <span>🆓 Ücretsiz</span>
                <span>⚡ Hızlı</span>
                <span>🎯 Kişisel</span>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-slate-800/50 mt-6 pt-4 text-center">
              <p className="text-xs text-gray-500">
                © 2024 GiftGenius. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}