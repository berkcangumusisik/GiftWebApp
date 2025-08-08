'use client';

export interface FavoriteGift {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  emoji: string;
  where?: string;
  whyPerfect: string;
  rating: number;
  addedAt: Date;
  forPerson?: string;
  occasion?: string;
}

const FAVORITES_KEY = 'giftgenius_favorites';

export class FavoritesManager {
  // Get all favorites from localStorage
  static getFavorites(): FavoriteGift[] {
    if (typeof window === 'undefined') return [];
    
    try {
      const favoritesJson = localStorage.getItem(FAVORITES_KEY);
      if (!favoritesJson) return [];
      
      const favorites = JSON.parse(favoritesJson);
      // Convert addedAt back to Date objects
      return favorites.map((fav: FavoriteGift & { addedAt: string }) => ({
        ...fav,
        addedAt: new Date(fav.addedAt)
      }));
    } catch (error) {
      console.error('Error loading favorites:', error);
      return [];
    }
  }

  // Save favorites to localStorage
  static saveFavorites(favorites: FavoriteGift[]): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error('Error saving favorites:', error);
    }
  }

  // Add a gift to favorites
  static addToFavorites(gift: Omit<FavoriteGift, 'id' | 'addedAt'>): boolean {
    try {
      const favorites = this.getFavorites();
      
      // Generate unique ID
      const id = `gift_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const newFavorite: FavoriteGift = {
        ...gift,
        id,
        addedAt: new Date()
      };

      // Check if already exists (by name and category)
      const exists = favorites.some(fav => 
        fav.name.toLowerCase() === gift.name.toLowerCase() && 
        fav.category === gift.category
      );

      if (exists) {
        return false; // Already in favorites
      }

      favorites.unshift(newFavorite); // Add to beginning
      this.saveFavorites(favorites);
      return true;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return false;
    }
  }

  // Remove from favorites
  static removeFromFavorites(id: string): boolean {
    try {
      const favorites = this.getFavorites();
      const updatedFavorites = favorites.filter(fav => fav.id !== id);
      this.saveFavorites(updatedFavorites);
      return true;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return false;
    }
  }

  // Check if a gift is in favorites
  static isInFavorites(giftName: string, category: string): boolean {
    const favorites = this.getFavorites();
    return favorites.some(fav => 
      fav.name.toLowerCase() === giftName.toLowerCase() && 
      fav.category === category
    );
  }

  // Get favorites count
  static getFavoritesCount(): number {
    return this.getFavorites().length;
  }

  // Clear all favorites
  static clearFavorites(): void {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(FAVORITES_KEY);
  }

  // Get favorites by category
  static getFavoritesByCategory(category: string): FavoriteGift[] {
    const favorites = this.getFavorites();
    return favorites.filter(fav => fav.category === category);
  }

  // Search favorites
  static searchFavorites(query: string): FavoriteGift[] {
    const favorites = this.getFavorites();
    const lowercaseQuery = query.toLowerCase();
    
    return favorites.filter(fav =>
      fav.name.toLowerCase().includes(lowercaseQuery) ||
      fav.category.toLowerCase().includes(lowercaseQuery) ||
      fav.description.toLowerCase().includes(lowercaseQuery) ||
      fav.forPerson?.toLowerCase().includes(lowercaseQuery)
    );
  }
}
