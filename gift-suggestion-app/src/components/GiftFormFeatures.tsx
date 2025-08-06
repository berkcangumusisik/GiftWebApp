'use client';

export default function GiftFormFeatures() {
  const features = [
    {
      emoji: "🤖",
      title: "AI Destekli Analiz",
      description: "Gelişmiş yapay zeka algoritmaları ile kişiye özel hediye önerileri alın.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    },
    {
      emoji: "🎯", 
      title: "Kişiselleştirilmiş",
      description: "Yaş, cinsiyet, hobiler ve bütçe bilgilerinize göre özel liste oluşturuyoruz.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    },
    {
      emoji: "⚡",
      title: "Hızlı Sonuçlar",
      description: "Sadece birkaç soruya cevap verin, 30 saniye içinde mükemmel öneriler alın.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
    },
    {
      emoji: "💎",
      title: "Premium Kalite", 
      description: "Özenle seçilmiş, kaliteli ve trend ürünler arasından en iyi seçenekleri sunuyoruz.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
          Neden <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">GiftGenius</span>?
        </h2>
        <p className="text-base text-gray-300 font-medium leading-relaxed">
          Hediye verme sanatını teknoloji ile buluşturarak<br/>
          sevdiklerinizi şaşırtmanıza yardımcı oluyoruz
        </p>
      </div>

      {/* Features Grid */}
      <div className="space-y-6 flex-1">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 bg-slate-800/50 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-lg hover:shadow-blue-500/10 hover:scale-105 transition-all duration-500 overflow-hidden"
          >
            {/* Animated background gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-start space-x-4">
              <div className="text-3xl group-hover:animate-bounce transition-all duration-300 filter drop-shadow-lg flex-shrink-0">
                {feature.emoji}
              </div>
              <div className="flex-1">
                <h3 className={`text-xl font-bold mb-2 text-white group-hover:bg-gradient-to-r group-hover:${feature.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
            
            {/* Hover sparkle effect */}
            <div className="absolute top-3 right-3 text-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse">
              ✨
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-lg py-2 px-3 border border-slate-700/30">
          <span className="text-lg">🔒</span>
          <span className="font-semibold text-sm">100% Güvenli</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-lg py-2 px-3 border border-slate-700/30">
          <span className="text-lg">⚡</span>
          <span className="font-semibold text-sm">Anında Sonuç</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-white bg-slate-800/40 backdrop-blur-sm rounded-lg py-2 px-3 border border-slate-700/30">
          <span className="text-lg">🆓</span>
          <span className="font-semibold text-sm">Tamamen Ücretsiz</span>
        </div>
      </div>
    </div>
  );
}