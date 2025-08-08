'use client';

import { useState, useEffect } from 'react';
import { FavoritesManager, type FavoriteGift } from '@/lib/favorites';
import Navbar from '@/components/Navbar';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteGift[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name' | 'category'>('newest');

  useEffect(() => {
    const loadFavorites = () => {
      try {
        const loadedFavorites = FavoritesManager.getFavorites();
        setFavorites(loadedFavorites);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const handleRemoveFromFavorites = (id: string) => {
    try {
      FavoritesManager.removeFromFavorites(id);
      setFavorites(prev => prev.filter(fav => fav.id !== id));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  };

  const handleClearAllFavorites = () => {
    if (window.confirm('Tüm favorileri silmek istediğinizden emin misiniz?')) {
      FavoritesManager.clearFavorites();
      setFavorites([]);
    }
  };

  // Filter and sort favorites
  const filteredAndSortedFavorites = favorites
    .filter(fav => {
      const matchesSearch = !searchQuery || 
        fav.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fav.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fav.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fav.forPerson?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || fav.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime();
        case 'oldest':
          return new Date(a.addedAt).getTime() - new Date(b.addedAt).getTime();
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

  // Get unique categories
  const categories = Array.from(new Set(favorites.map(fav => fav.category)));

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

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16">
          <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin text-4xl mb-4">❤️</div>
                <p className="text-white">Favorileriniz yükleniyor...</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 pt-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-24 h-24 bg-red-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-28 h-28 bg-purple-500/10 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 bg-pink-500/10 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-3 mb-4">
              <span className="text-4xl">❤️</span>
              <h1 className="text-3xl md:text-4xl font-black text-white">
                Favori Hediyelerim
              </h1>
              <span className="text-4xl">❤️</span>
            </div>
            <p className="text-gray-300 text-lg">
              Beğendiğiniz hediye önerilerini saklayabilir ve kolayca erişebilirsiniz
            </p>
          </div>

          {favorites.length === 0 ? (
            /* Empty State */
            <div className="max-w-2xl mx-auto text-center py-16">
              <div className="text-6xl mb-6">💔</div>
              <h2 className="text-2xl font-bold text-white mb-4">Henüz favori hediyeniz yok</h2>
              <p className="text-gray-300 mb-8">
                Hediye önerilerini görüntülerken ❤️ butonuna tıklayarak favorilerinize ekleyebilirsiniz.
              </p>
              <button
                onClick={() => window.location.href = '/recommend'}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-pink-500/25"
              >
                🎁 Hediye Önerisi Al
              </button>
            </div>
          ) : (
            <>
              {/* Controls */}
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                  {/* Search */}
                  <div className="flex-1 max-w-md">
                    <input
                      type="text"
                      placeholder="Favorilerinizde ara..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-400"
                    />
                  </div>

                  {/* Category Filter */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="all">Tüm Kategoriler</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {getCategoryIcon(category)} {category}
                      </option>
                    ))}
                  </select>

                  {/* Sort */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'name' | 'category')}
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600/50 text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="newest">Yeniden Eskiye</option>
                    <option value="oldest">Eskiden Yeniye</option>
                    <option value="name">İsme Göre</option>
                    <option value="category">Kategoriye Göre</option>
                  </select>

                  {/* Clear All */}
                  <button
                    onClick={handleClearAllFavorites}
                    className="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 rounded-lg transition-colors"
                  >
                    🗑️ Tümünü Sil
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
                  <span>Toplam {favorites.length} favori hediye</span>
                  <span>{filteredAndSortedFavorites.length} sonuç gösteriliyor</span>
                </div>
              </div>

              {/* Favorites Grid */}
              {filteredAndSortedFavorites.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-white mb-2">Arama sonucu bulunamadı</h3>
                  <p className="text-gray-300">Farklı anahtar kelimeler deneyebilir veya filtreleri sıfırlayabilirsiniz.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredAndSortedFavorites.map((favorite) => (
                    <div
                      key={favorite.id}
                      className="group bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    >
                      {/* Gift Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{favorite.emoji}</div>
                          <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                              {favorite.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(favorite.category)} text-white`}>
                                {getCategoryIcon(favorite.category)} {favorite.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleRemoveFromFavorites(favorite.id)}
                          className="group/btn flex items-center space-x-1 px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 hover:border-red-400/50 rounded-full transition-all duration-200"
                          title="Favorilerden çıkar"
                        >
                          <span className="text-red-400 group-hover/btn:text-red-300">💔</span>
                        </button>
                      </div>

                      {/* Gift Details */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-green-400">{favorite.price}</span>
                          {renderStars(favorite.rating)}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {favorite.description}
                        </p>

                        {favorite.whyPerfect && (
                          <div className="bg-blue-900/20 rounded-lg p-3">
                            <div className="flex items-start space-x-2">
                              <span className="text-blue-400 text-sm mt-0.5">🎯</span>
                              <div>
                                <div className="text-blue-300 text-xs font-medium mb-1">AI Analizi</div>
                                <div className="text-blue-100 text-xs">{favorite.whyPerfect}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {favorite.where && (
                          <div className="border-t border-slate-700/50 pt-3">
                            <div className="flex items-start space-x-2">
                              <span className="text-gray-400 text-xs mt-0.5">🛍️</span>
                              <div>
                                <div className="text-gray-400 text-xs font-medium mb-1">Nereden:</div>
                                <div className="text-gray-300 text-xs">{favorite.where}</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Meta Info */}
                      <div className="border-t border-slate-700/50 pt-3 space-y-1 text-xs text-gray-400">
                        {favorite.forPerson && (
                          <div>👤 {favorite.forPerson} için</div>
                        )}
                        {favorite.occasion && (
                          <div>🎉 {favorite.occasion}</div>
                        )}
                        <div>📅 {new Date(favorite.addedAt).toLocaleDateString('tr-TR')}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                <button
                  onClick={() => window.location.href = '/recommend'}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
                  🎁 Yeni Hediye Önerisi Al
                </button>
                
                <button
                  onClick={() => {
                    const favoritesList = filteredAndSortedFavorites.map(fav => 
                      `${fav.name} - ${fav.price} (${fav.category})`
                    ).join('\n');
                    const text = `Favori Hediyelerim:\n\n${favoritesList}`;
                    navigator.clipboard.writeText(text);
                    alert('Favori hediyeler panoya kopyalandı!');
                  }}
                  className="px-8 py-4 bg-slate-700/50 text-gray-300 font-semibold rounded-xl border border-slate-600/50 hover:bg-slate-700/70 transition-all duration-200"
                >
                  📋 Listeyi Kopyala
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
