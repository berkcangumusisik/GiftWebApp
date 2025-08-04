import Logo from './Logo';

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Modern startup-style gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orbs - cohesive purple/blue theme */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-32 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-4000"></div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/4 left-10 text-3xl animate-bounce delay-500 opacity-60">🎁</div>
        <div className="absolute top-1/3 right-16 text-2xl animate-bounce delay-1000 opacity-60">✨</div>
        <div className="absolute bottom-1/4 left-16 text-2xl animate-bounce delay-1500 opacity-60">🚀</div>
        <div className="absolute bottom-1/3 right-10 text-3xl animate-bounce delay-2000 opacity-60">💎</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-bounce delay-2500 opacity-60">🤖</div>
        <div className="absolute top-3/4 right-1/4 text-2xl animate-bounce delay-3000 opacity-60">⭐</div>
      </div>

      {/* Content */}
      <div className="space-y-8 max-w-5xl mx-auto relative z-10">
        <div className="animate-fade-in-up">
          <Logo />
        </div>
        
        <div className="animate-fade-in-up delay-300">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6 px-4">
            🤖 Yapay Zekâ ile En Doğru Hediyeyi Keşfet!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text font-semibold px-4">
            Artık hediye seçmek bu kadar kolay olmamıştı
          </p>
        </div>
        
        <div className="animate-fade-in-up delay-500">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            ✨ AI destekli hediye önerilerimizle sevdiklerinizi şaşırtın. Kişilik analizi, ilgi alanları ve bütçenize göre 
            <span className="font-bold text-blue-400"> mükemmel hediyeyi</span> bulmanıza yardımcı oluyoruz.
          </p>
        </div>

        {/* Modern stats cards */}
        <div className="animate-fade-in-up delay-700 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 max-w-5xl mx-auto px-4">
          <div className="group text-center p-6 sm:p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">10,000+</div>
            <div className="text-sm sm:text-base font-medium text-gray-300 mt-2">Mutlu Kullanıcı</div>
          </div>
          <div className="group text-center p-6 sm:p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">500+</div>
            <div className="text-sm sm:text-base font-medium text-gray-300 mt-2">Hediye Kategorisi</div>
          </div>
          <div className="group text-center p-6 sm:p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-pink-500/20 shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300">
            <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⭐</div>
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text">95%</div>
            <div className="text-sm sm:text-base font-medium text-gray-300 mt-2">Memnuniyet Oranı</div>
          </div>
        </div>
      </div>
    </section>
  );
}