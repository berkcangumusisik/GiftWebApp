export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      emoji: "📝",
      title: "Bilgileri Paylaş",
      description: "Hediye alacağınız kişi hakkında birkaç basit soruyu cevaplayın",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
      bgGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20"
    },
    {
      step: "2", 
      emoji: "🤖",
      title: "AI Analizi",
      description: "Yapay zekamız verilerinizi analiz ederek kişiye özel öneriler hazırlar",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      bgGradient: "from-cyan-500/20 via-blue-500/20 to-indigo-500/20"
    },
    {
      step: "3",
      emoji: "🎁",
      title: "Mükemmel Hediye",
      description: "Size özel hazırlanmış hediye listesinden beğendiğinizi seçin",
      gradient: "from-emerald-600 via-green-600 to-teal-600",
      bgGradient: "from-emerald-500/20 via-green-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 px-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
          Nasıl <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Çalışır</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-20 max-w-3xl mx-auto font-medium">
          Sadece 3 basit adımda mükemmel hediyeyi bulun
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center p-10 bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl hover:shadow-blue-500/10 hover:scale-105 transition-all duration-500">
                {/* Step number with modern design */}
                <div className={`w-24 h-24 bg-gradient-to-r ${step.gradient} text-white text-4xl font-black rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300 relative`}>
                  {step.step}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Enhanced emoji */}
                <div className="text-6xl mb-8 group-hover:animate-bounce transition-all duration-300 filter drop-shadow-lg" style={{animationDelay: `${index * 200}ms`}}>
                  {step.emoji}
                </div>
                
                {/* Enhanced content */}
                <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-medium text-lg">
                  {step.description}
                </p>
                
                {/* Sparkle effect */}
                <div className="absolute top-6 right-6 text-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-pulse">
                  ✨
                </div>
              </div>

              {/* Modern connector arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-8 text-3xl transform -translate-y-1/2 z-10">
                  <span className="text-blue-400/60 animate-pulse">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}