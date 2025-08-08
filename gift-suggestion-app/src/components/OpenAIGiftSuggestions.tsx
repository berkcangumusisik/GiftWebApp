'use client';

import { useState, useEffect } from 'react';
import { type GiftSuggestion } from '@/lib/openai';
import { FavoritesManager } from '@/lib/favorites';

interface OpenAIGiftSuggestionsProps {
  suggestions: GiftSuggestion[];
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

export default function OpenAIGiftSuggestions({ suggestions, requestData, onNewSearch }: OpenAIGiftSuggestionsProps) {
  const [favoriteGifts, setFavoriteGifts] = useState<Set<string>>(new Set());
  const [isAddingToFavorites, setIsAddingToFavorites] = useState<Set<string>>(new Set());
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null);

  // Load favorites on component mount
  useEffect(() => {
    const favorites = FavoritesManager.getFavorites();
    const favoriteKeys = new Set(
      favorites.map(fav => `${fav.name}_${fav.category}`)
    );
    setFavoriteGifts(favoriteKeys);
  }, []);

  const handleAddToFavorites = async (gift: GiftSuggestion) => {
    const giftKey = `${gift.name}_${gift.category}`;
    setIsAddingToFavorites(prev => new Set([...prev, giftKey]));

    try {
      const success = FavoritesManager.addToFavorites({
        name: gift.name,
        description: gift.description,
        price: gift.price,
        category: gift.category,
        emoji: gift.emoji || '🎁',
        where: gift.where,
        whyPerfect: gift.whyPerfect,
        rating: gift.rating,
        forPerson: requestData.recipient,
        occasion: requestData.occasion
      });

      if (success) {
        setFavoriteGifts(prev => new Set([...prev, giftKey]));
        setShowSuccessMessage(`"${gift.name}" favorilere eklendi! ❤️`);
        setTimeout(() => setShowSuccessMessage(null), 3000);
      } else {
        setShowSuccessMessage(`"${gift.name}" zaten favorilerinizde! 💫`);
        setTimeout(() => setShowSuccessMessage(null), 3000);
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      setShowSuccessMessage('Favorilere eklerken bir hata oluştu 😞');
      setTimeout(() => setShowSuccessMessage(null), 3000);
    } finally {
      setIsAddingToFavorites(prev => {
        const newSet = new Set(prev);
        newSet.delete(giftKey);
        return newSet;
      });
    }
  };

  const handleRemoveFromFavorites = async (gift: GiftSuggestion) => {
    try {
      const favorites = FavoritesManager.getFavorites();
      const favoriteToRemove = favorites.find(fav => 
        fav.name === gift.name && fav.category === gift.category
      );

      if (favoriteToRemove) {
        FavoritesManager.removeFromFavorites(favoriteToRemove.id);
        const giftKey = `${gift.name}_${gift.category}`;
        setFavoriteGifts(prev => {
          const newSet = new Set(prev);
          newSet.delete(giftKey);
          return newSet;
        });
        setShowSuccessMessage(`"${gift.name}" favorilerden çıkarıldı! 💔`);
        setTimeout(() => setShowSuccessMessage(null), 3000);
      }
    } catch (error) {
      console.error('Error removing from favorites:', error);
      setShowSuccessMessage('Favorilerden çıkarırken bir hata oluştu 😞');
      setTimeout(() => setShowSuccessMessage(null), 3000);
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Lifestyle': '🏠',
      'Teknoloji': '💻',
      'Wellness': '🧘‍♀️',
      'Eğitim': '🎓',
      'Gıda': '🍽️',
      'Müzik': '🎶',
      'Spor': '🏃‍♂️',
      'Moda': '👗',
      'Hobi': '🎨',
      'Ev': '🏡',
      'Sağlık': '🏥'
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
      'Müzik': 'from-indigo-500 to-purple-500',
      'Spor': 'from-red-500 to-orange-500',
      'Moda': 'from-fuchsia-500 to-pink-500',
      'Hobi': 'from-teal-500 to-cyan-500',
      'Ev': 'from-amber-500 to-yellow-500',
      'Sağlık': 'from-emerald-500 to-green-500'
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
            <span className="text-4xl">🤖</span>
            <h1 className="text-3xl md:text-4xl font-black text-white">
              AI Hediye Önerileri
            </h1>
          </div>
          <p className="text-gray-300 text-lg">
            <span className="font-semibold text-blue-400">{requestData.recipient}</span> için 
            özel olarak hazırlanmış kişisel hediye önerileri
          </p>
        </div>

        {/* Quick Summary */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">📋</span>
            Analiz Edilen Bilgiler
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
          {requestData.interests && (
            <div className="mt-4 bg-slate-700/30 rounded-lg p-3">
              <div className="text-gray-400 text-sm">İlgi Alanları</div>
              <div className="text-white font-medium">{requestData.interests}</div>
            </div>
          )}
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed top-20 right-4 z-50 bg-green-900/90 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 shadow-xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">✅</span>
              <span className="text-green-100 font-medium">{showSuccessMessage}</span>
            </div>
          </div>
        )}

        {/* AI Powered Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-full px-4 py-2">
            <span className="text-xl">🤖</span>
            <span className="text-blue-300 text-sm font-medium">OpenAI GPT-3.5 Turbo ile Analiz Edildi</span>
            <span className="text-green-400">✨</span>
          </div>
        </div>

        {/* Gift Suggestions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {suggestions.map((gift, index) => (
            <div
              key={gift.id || index}
              className={`group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl ${
                index === 0 ? 'ring-2 ring-blue-500/50' : ''
              }`}
            >
              {/* Gift Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{gift.emoji || '🎁'}</div>
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
                          🎯 AI Favorisi
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-lg font-bold text-green-400">{gift.price}</div>
                  {gift.rating && renderStars(gift.rating)}
                  
                  {/* Favorite Button */}
                  <div className="flex items-center space-x-2">
                    {favoriteGifts.has(`${gift.name}_${gift.category}`) ? (
                      <button
                        onClick={() => handleRemoveFromFavorites(gift)}
                        className="group/btn flex items-center space-x-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/50 rounded-full transition-all duration-200"
                        title="Favorilerden çıkar"
                      >
                        <span className="text-red-400 group-hover/btn:text-red-300">💔</span>
                        <span className="text-red-300 text-xs font-medium">Favoride</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToFavorites(gift)}
                        disabled={isAddingToFavorites.has(`${gift.name}_${gift.category}`)}
                        className={`group/btn flex items-center space-x-1 px-3 py-1.5 border rounded-full transition-all duration-200 ${
                          isAddingToFavorites.has(`${gift.name}_${gift.category}`)
                            ? 'bg-gray-500/20 border-gray-400/30 cursor-not-allowed'
                            : 'bg-pink-500/20 hover:bg-pink-500/30 border-pink-400/30 hover:border-pink-400/50'
                        }`}
                        title="Favorilere ekle"
                      >
                        {isAddingToFavorites.has(`${gift.name}_${gift.category}`) ? (
                          <>
                            <span className="animate-spin text-gray-400">⏳</span>
                            <span className="text-gray-400 text-xs font-medium">Ekleniyor...</span>
                          </>
                        ) : (
                          <>
                            <span className="text-pink-400 group-hover/btn:text-pink-300">❤️</span>
                            <span className="text-pink-300 text-xs font-medium">Favorile</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Gift Description */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                {gift.description}
              </p>

              {/* Why Perfect */}
              <div className="bg-blue-900/20 rounded-lg p-3 mb-4">
                <div className="flex items-start space-x-2">
                  <span className="text-blue-400 text-sm mt-0.5">🎯</span>
                  <div>
                    <div className="text-blue-300 text-sm font-medium mb-1">AI Analizi</div>
                    <div className="text-blue-100 text-sm">{gift.whyPerfect}</div>
                  </div>
                </div>
              </div>

              {/* Where to Buy */}
              {gift.where && (
                <div className="border-t border-slate-700/50 pt-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-400 text-sm mt-0.5">🛍️</span>
                    <div>
                      <div className="text-gray-400 text-sm font-medium mb-1">Nereden Alabilirsiniz:</div>
                      <div className="text-gray-300 text-sm">{gift.where}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onNewSearch}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
          >
            🔄 Yeni AI Analizi Yap
          </button>

          <button
            onClick={() => {
              window.location.href = '/favorites';
            }}
            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
          >
            ❤️ Favorilerim ({FavoritesManager.getFavoritesCount()})
          </button>
          
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
          >
            🖨️ Listeyi Yazdır
          </button>

          <button
            onClick={() => {
              const suggestionsList = suggestions.map(gift => `${gift.name} - ${gift.price}`).join('\n');
              const text = `${requestData.recipient} için AI hediye önerileri:\n\n${suggestionsList}`;
              navigator.clipboard.writeText(text);
              setShowSuccessMessage('AI hediye listesi panoya kopyalandı! 📋');
              setTimeout(() => setShowSuccessMessage(null), 3000);
            }}
            className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
          >
            📋 Listeyi Kopyala
          </button>
        </div>

        {/* Footer Info */}
        <div className="text-center mt-12 space-y-2">
          <p className="text-gray-400 text-sm">
            🤖 Bu öneriler OpenAI GPT-3.5 Turbo ile kişiselleştirilmiş analiz sonucu hazırlanmıştır
          </p>
          <p className="text-gray-500 text-xs">
            💡 Satın almadan önce fiyat ve stok durumunu kontrol etmeyi unutmayın
          </p>
          <div className="flex justify-center items-center space-x-4 text-xs text-gray-500 mt-4">
            <span>🤖 AI Destekli</span>
            <span>🎯 Kişiselleştirilmiş</span>
            <span>⚡ Anlık</span>
            <span>🔒 Güvenli</span>
          </div>
        </div>
      </div>
    </div>
  );
}