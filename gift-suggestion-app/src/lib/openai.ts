// Form verileri interface'i
interface FormData {
  recipient: string;
  age: string;
  gender: string;
  interests: string;
  budget: string;
  occasion: string;
  relationship: string;
}

// Hediye önerisi interface'i
interface GiftSuggestion {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  emoji: string;
  where: string;
  whyPerfect: string;
  rating: number;
}

// API Response interface
interface ApiResponse {
  success: boolean;
  suggestions?: GiftSuggestion[];
  requestData?: FormData;
  isOpenAI?: boolean;
  error?: string;
  isConfigured?: boolean;
}

// Client-side API çağrısı fonksiyonu
export async function generateGiftSuggestions(formData: FormData): Promise<GiftSuggestion[]> {
  try {
    const response = await fetch('/api/suggest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data: ApiResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API çağrısında hata oluştu');
    }

    if (!data.success || !data.suggestions) {
      throw new Error(data.error || 'Hediye önerisi oluşturulamadı');
    }

    return data.suggestions;

  } catch (error) {
    console.error('API çağrı hatası:', error);
    throw error;
  }
}

// OpenAI yapılandırma kontrolü (client-side)
export async function checkOpenAIConfiguration(): Promise<boolean> {
  try {
    const response = await fetch('/api/suggest', {
      method: 'GET',
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.isConfigured || false;

  } catch (error) {
    console.error('Yapılandırma kontrolü hatası:', error);
    return false;
  }
}

// Export types
export type { GiftSuggestion, FormData, ApiResponse };