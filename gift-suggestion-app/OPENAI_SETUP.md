# OpenAI API Kurulumu

Bu proje OpenAI API'sini kullanarak hediye önerileri oluşturmaktadır.

## Kurulum Adımları

### 1. OpenAI API Anahtarı Edinme
1. [OpenAI Platform](https://platform.openai.com/) sitesine gidin
2. Hesap oluşturun veya giriş yapın
3. API Keys bölümünden yeni bir API anahtarı oluşturun

### 2. Environment Variables Yapılandırması
1. Proje kök dizininde `.env.local` dosyası oluşturun
2. Aşağıdaki içeriği ekleyin:

```env
# OpenAI API Configuration
OPENAI_API_KEY=your_actual_openai_api_key_here

# Next.js Configuration  
NEXT_PUBLIC_APP_NAME=Gift Suggestion App

# Optional: OpenAI Model Configuration
OPENAI_MODEL=gpt-3.5-turbo
OPENAI_MAX_TOKENS=1000
OPENAI_TEMPERATURE=0.7
```

### 3. API Kullanımı

Hediye önerisi almak için `/api/suggest` endpoint'ini POST metodu ile kullanın:

```javascript
const response = await fetch('/api/suggest', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    recipient: 'Anne',
    age: '45',
    gender: 'Kadın',
    interests: 'Kitap okuma, bahçıvanlık',
    budget: '500-1000 TL',
    occasion: 'Doğum günü'
  })
});

const data = await response.json();
console.log(data.suggestion);
```

### 4. Mevcut Dosya Yapısı

- `src/lib/openai.ts` - OpenAI yapılandırması ve yardımcı fonksiyonlar
- `src/app/api/suggest/route.ts` - Hediye önerisi API endpoint'i

### 5. Güvenlik Notları

- `.env.local` dosyasını Git'e commit etmeyin
- API anahtarınızı başkalarıyla paylaşmayın
- Production ortamında environment variables'ları güvenli şekilde yapılandırın

## Kullanım Limitleri

OpenAI API'si ücretli bir servistir. Kullanım limitlerini ve fiyatlandırmayı [OpenAI Pricing](https://openai.com/pricing) sayfasından kontrol edebilirsiniz.