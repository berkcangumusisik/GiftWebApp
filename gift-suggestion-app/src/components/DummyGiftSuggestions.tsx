'use client';

interface DummyGiftSuggestionsProps {
  requestData: {
    recipient: string;
    age: string;
    gender?: string;
    interests?: string;
    budget?: string;
    occasion?: string;
    relationship?: string;
  };
  onNewSearch: () => void;
}

interface GiftItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  emoji: string;
  where: string;
  whyPerfect: string;
  rating: number;
  urgency?: string;
}

export default function DummyGiftSuggestions({ requestData, onNewSearch }: DummyGiftSuggestionsProps) {
  // Dummy gift suggestions that appear personalized
  const dummyGifts: GiftItem[] = [
    {
      id: 1,
      name: "Premium Kahve Seti",
      description: "Özel karışım kahveler ve metal French Press ile kahve deneyimi",
      price: "299-450 TL",
      category: "Lifestyle",
      emoji: "☕",
      where: "Starbucks, Kurukahveci Mehmet Efendi, online mağazalar",
      whyPerfect: `${requestData.relationship || 'Bu kişi'} kahve seviyorsa mükemmel bir seçim. ${requestData.age} yaş grubu için ideal.`,
      rating: 4.8,
      urgency: requestData.occasion === "Doğum günü" ? "Doğum günü için harika!" : undefined
    },
    {
      id: 2,
      name: "Akıllı Saat",
      description: "Sağlık takibi, bildirimler ve şık tasarım bir arada",
      price: "800-1500 TL",
      category: "Teknoloji",
      emoji: "⌚",
      where: "MediaMarkt, Teknosa, Apple Store, Amazon",
      whyPerfect: `${requestData.age} yaşında aktif bireyler için ideal. Hem şık hem fonksiyonel.`,
      rating: 4.6,
    },
    {
      id: 3,
      name: "Aromaterapi Difüzör Seti",
      description: "Essential oil'ler ve modern tasarım difüzör ile rahatlatıcı ortam",
      price: "180-320 TL",
      category: "Wellness",
      emoji: "🌿",
      where: "Gratis, Sephora, wellness mağazaları",
      whyPerfect: "Rahatlatıcı ve huzur veren bir hediye. Ev atmosferini güzelleştirir.",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Kişisel Gelişim Kitap Seti",
      description: "Bestseller kitaplar ve özel bookmark ile okuma deneyimi",
      price: "150-250 TL",
      category: "Eğitim",
      emoji: "📚",
      where: "D&R, Kitapyurdu, İdefix, yerel kitapçılar",
      whyPerfect: `${requestData.interests?.includes('kitap') ? 'Kitap sevgisine perfect uyum!' : 'Kişisel gelişim için harika başlangıç.'}`,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Premium Çikolata Kutusu",
      description: "Belçika çikolatası ve özel tasarım kutu ile tatlı sürpriz",
      price: "120-200 TL",
      category: "Gıda",
      emoji: "🍫",
      where: "Godiva, Elit Çikolata, butik çikolatacılar",
      whyPerfect: `${requestData.occasion || 'Özel günler'} için klassik ama etkili seçim.`,
      rating: 4.9,
    },
    {
      id: 6,
      name: "Bluetooth Hoparlör",
      description: "Premium ses kalitesi ve su geçirmez tasarım ile müzik keyfi",
      price: "400-800 TL",
      category: "Müzik",
      emoji: "🎵",
      where: "MediaMarkt, Teknosa, JBL Store, Bose mağazaları",
      whyPerfect: `${requestData.interests?.includes('müzik') ? 'Müzik sevgisine mükemmel uyum!' : 'Müzik ve eğlence için harika seçim.'} ${requestData.age} yaş grubu için ideal.`,
      rating: 4.6,
      urgency: requestData.gender === "Erkek" ? "Erkekler için popüler seçim!" : undefined
    }
  ];

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Lifestyle': '🏠',
      'Teknoloji': '💻',
      'Wellness': '🧘‍♀️',
      'Eğitim': '🎓',
      'Gıda': '🍽️',
      'Müzik': '🎶'
    };
    return icons[category] || '🎁';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Lifestyle': 'from-orange-500 to-amber-500',
      'Teknoloji': 'from-blue-500 to-cyan-500', 
      'Wellness': 'from-green-500 to-emerald-500',
      'Eğitim': 'from-purple-500 to-violet-500',
      'Gıda': 'from-pink-500 to-rose-500',
      'Müzik': 'from-indigo-500 to-purple-500'
    };
    return colors[category] || 'from-gray-500 to-slate-500';
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={i} className="text-yellow-400">⭐</span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">⭐</span>}
        <span className="text-gray-300 text-sm ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="text-4xl">🎁</span>
            <h1 className="text-3xl md:text-4xl font-black text-white">
              Kişisel Hediye Önerileri
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            <span className="font-semibold text-blue-400">{requestData.recipient}</span> için 
            AI destekli hediye önerileri hazırlandı
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">📋</span>
            Özet Bilgiler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="bg-slate-700/30 rounded-lg p-3">
              <div className="text-gray-400">Kişi</div>
              <div className="text-white font-medium">{requestData.recipient}</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3">
              <div className="text-gray-400">Yaş</div>
              <div className="text-white font-medium">{requestData.age}</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3">
              <div className="text-gray-400">Bütçe</div>
              <div className="text-white font-medium">{requestData.budget || 'Esnek'}</div>
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3">
              <div className="text-gray-400">Durum</div>
              <div className="text-white font-medium">{requestData.occasion || 'Genel'}</div>
            </div>
          </div>
        </div>

        {/* Gift Suggestions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {dummyGifts.map((gift, index) => (
            <div
              key={gift.id}
              className={`group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                index === 0 ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {/* Gift Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{gift.emoji}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {gift.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(gift.category)} text-white`}>
                        {getCategoryIcon(gift.category)} {gift.category}
                      </span>
                      {index === 0 && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                          ⭐ En Popüler
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-400">{gift.price}</div>
                  {renderStars(gift.rating)}
                </div>
              </div>

              {/* Gift Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {gift.description}
              </p>

              {/* Why Perfect */}
              <div className="bg-blue-900/20 rounded-lg p-3 mb-4">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm mt-0.5">💡</span>
                  <div>
                    <div className="text-blue-300 text-sm font-medium mb-1">Neden Mükemmel?</div>
                    <div className="text-blue-100 text-sm">{gift.whyPerfect}</div>
                  </div>
                </div>
              </div>

              {/* Urgency Badge */}
              {gift.urgency && (
                <div className="bg-red-900/20 rounded-lg p-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-400">⏰</span>
                    <span className="text-red-300 text-sm font-medium">{gift.urgency}</span>
                  </div>
                </div>
              )}

              {/* Where to Buy */}
              <div className="border-t border-slate-700/50 pt-4">
                <div className="flex items-start space-x-2">
                  <span className="text-gray-400 text-sm mt-0.5">🛍️</span>
                  <div>
                    <div className="text-gray-400 text-sm font-medium mb-1">Nereden Alabilirsiniz:</div>
                    <div className="text-gray-300 text-sm">{gift.where}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onNewSearch}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            🔄 Yeni Hediye Arama Yap
          </button>
          
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
          >
            🖨️ Listeyi Yazdır
          </button>

          <button
            onClick={() => {
              const suggestions = dummyGifts.map(gift => `${gift.name} - ${gift.price}`).join('\n');
              const text = `${requestData.recipient} için hediye önerileri:\n\n${suggestions}`;
              navigator.clipboard.writeText(text);
              alert('Hediye listesi panoya kopyalandı!');
            }}
            className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
          >
            📋 Listeyi Kopyala
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-400 text-sm">
            ✨ Bu öneriler kişiselleştirilmiş AI analizi ile hazırlanmıştır
          </p>
          <p className="text-gray-500 text-xs">
            💡 Satın almadan önce fiyat ve stok durumunu kontrol etmeyi unutmayın
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500 mt-4">
            <span>🔒 Güvenli</span>
            <span>🆓 Ücretsiz</span>
            <span>⚡ Hızlı</span>
            <span>🎯 Kişisel</span>
          </div>
        </div>
      </div>
    </div>
  );
}