export default function Features() {
  const features = [
    {
      emoji: "🤖",
      title: "AI Destekli Analiz",
      description: "Gelişmiş yapay zeka algoritmalarımız kişilik özelliklerini analiz ederek en uygun hediye önerilerini sunar.",
      gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
      bgGradient: "from-violet-500/10 via-purple-500/10 to-fuchsia-500/10",
      borderColor: "border-violet-300/40"
    },
    {
      emoji: "🎯",
      title: "Kişiselleştirilmiş Öneriler",
      description: "Yaş, cinsiyet, hobiler ve bütçe bilgilerinize göre size özel hediye listesi oluşturuyoruz.",
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      bgGradient: "from-cyan-500/10 via-blue-500/10 to-indigo-500/10",
      borderColor: "border-cyan-300/40"
    },
    {
      emoji: "⚡",
      title: "Hızlı Sonuçlar",
      description: "Sadece birkaç soruya cevap verin, 30 saniye içinde mükemmel hediye önerilerinizi alın.",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgGradient: "from-yellow-500/10 via-orange-500/10 to-red-500/10",
      borderColor: "border-yellow-300/40"
    },
    {
      emoji: "💎",
      title: "Premium Kalite",
      description: "Özenle seçilmiş, kaliteli ve trend ürünler arasından en iyi seçenekleri sunuyoruz.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      bgGradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
      borderColor: "border-emerald-300/40"
    },
    {
      emoji: "🎨",
      title: "Çeşitli Kategoriler",
      description: "Teknoloji, moda, kitap, oyuncak, ev dekorasyonu ve daha birçok kategoride binlerce seçenek.",
      gradient: "from-pink-500 via-rose-500 to-red-500",
      bgGradient: "from-pink-500/10 via-rose-500/10 to-red-500/10",
      borderColor: "border-pink-300/40"
    },
    {
      emoji: "🔒",
      title: "Güvenli & Ücretsiz",
      description: "Kişisel bilgileriniz güvende, hizmetimiz tamamen ücretsiz ve reklamsız.",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      bgGradient: "from-indigo-500/10 via-purple-500/10 to-pink-500/10",
      borderColor: "border-indigo-300/40"
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 px-4 relative">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Neden <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">GiftGenius</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Hediye verme sanatını teknoloji ile buluşturarak, her anınızı özel kılıyoruz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Border gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} style={{mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude'}}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-5xl mb-6 group-hover:animate-bounce transition-all duration-300 filter drop-shadow-lg">
                  {feature.emoji}
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white group-hover:bg-gradient-to-r group-hover:${feature.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover sparkle effect */}
              <div className="absolute top-4 right-4 text-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse">
                ✨
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}