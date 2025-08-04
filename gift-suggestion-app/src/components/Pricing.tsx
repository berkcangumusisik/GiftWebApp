export default function Pricing() {
  const plans = [
    {
      name: "Pro",
      price: "49₺",
      period: "/ay",
      description: "En popüler plan",
      features: [
        "Sınırsız hediye önerisi",
        "Gelişmiş AI analizi",
        "Tüm kategoriler",
        "Kişilik profili",
        "Öncelikli destek",
        "Hediye takibi"
      ],
      buttonText: "Pro'ya Geç",
      popular: true
    },
    {
      name: "Enterprise",
      price: "199₺",
      period: "/ay",
      description: "Büyük ekipler için",
      features: [
        "Pro'daki her şey",
        "Ekip yönetimi",
        "API erişimi",
        "Özel entegrasyon",
        "Analitik rapor",
        "24/7 destek"
      ],
      buttonText: "İletişime Geç",
      popular: false
    }
  ];

  const freePlan = {
    name: "Ücretsiz",
    price: "0₺",
    period: "/ay",
    description: "Keşfetmeye başla",
    features: [
      "5 hediye önerisi/ay",
      "Temel AI analizi",
      "Standart kategoriler",
      "Email desteği"
    ],
    buttonText: "Ücretsiz Başla",
    popular: false
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 relative">
      {/* Simple background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-800/80"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Fiyatlar</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Size uygun planı seçin ve AI destekli hediye deneyiminin keyfini çıkarın
          </p>
        </div>

        {/* Premium Plans - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'ring-2 ring-blue-500 scale-105 bg-gradient-to-br from-blue-50 to-purple-50' 
                  : 'hover:scale-105'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                    En Popüler
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Free Plan - Bottom Section */}
        <div className="text-center mb-8">
          <div className="text-gray-400 text-sm mb-6 flex items-center justify-center space-x-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span>veya</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            {/* Free badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                %100 Ücretsiz
              </div>
            </div>

            {/* Plan header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{freePlan.name}</h3>
              <p className="text-gray-600 mb-6">{freePlan.description}</p>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{freePlan.price}</span>
                  <span className="text-gray-600 ml-1">{freePlan.period}</span>
                </div>
                <p className="text-green-600 font-semibold mt-2">Sonsuza kadar ücretsiz</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {freePlan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl">
              {freePlan.buttonText}
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>7 gün ücretsiz deneme</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>İstediğiniz zaman iptal</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>✅</span>
              <span>30 gün para iade garantisi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}