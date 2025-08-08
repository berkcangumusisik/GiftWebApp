# 🚀 GiftGenius SEO Optimization Checklist

Bu belge, GiftGenius projesinin arama motorlarında daha iyi sıralamalar elde etmesi için yapılan SEO optimizasyonlarını ve yapılması gereken ek adımları içerir.

## ✅ Tamamlanan SEO Optimizasyonları

### 📊 Metadata Optimization
- [x] **Global Metadata**: Tüm sayfalar için comprehensive metadata
- [x] **Page-specific Metadata**: Her sayfa için özelleştirilmiş başlık ve açıklama
- [x] **Open Graph**: Facebook, WhatsApp vb. için social sharing
- [x] **Twitter Cards**: Twitter paylaşımları için optimize edilmiş
- [x] **Canonical URLs**: Duplicate content önleme
- [x] **Language/Region**: tr-TR locale ayarları

### 🔍 Structured Data (JSON-LD)
- [x] **Website Schema**: Ana site bilgileri
- [x] **Organization Schema**: Şirket bilgileri
- [x] **Service Schema**: Hediye önerisi hizmeti
- [x] **WebApplication Schema**: Web uygulaması bilgileri
- [x] **FAQ Schema**: Sık sorulan sorular
- [x] **Rich Snippets**: Google'da zengin sonuçlar için

### 🗺️ Site Architecture
- [x] **Sitemap.xml**: Otomatik oluşturulan sitemap
- [x] **Robots.txt**: Crawler yönlendirmeleri
- [x] **Internal Linking**: Sayfalar arası link yapısı
- [x] **URL Structure**: SEO-friendly URL'ler
- [x] **Semantic HTML**: Header, main, section, article tagları

### ⚡ Performance & Core Web Vitals
- [x] **Image Optimization**: WebP/AVIF format desteği
- [x] **Compression**: Gzip sıkıştırma
- [x] **Caching Headers**: Optimal cache politikaları
- [x] **Bundle Optimization**: Code splitting ve lazy loading
- [x] **Loading States**: UX için loading sayfaları

### 🔒 Security Headers
- [x] **CSP**: Content Security Policy
- [x] **HSTS**: HTTP Strict Transport Security
- [x] **X-Frame-Options**: Clickjacking koruması
- [x] **X-Content-Type-Options**: MIME type sniffing koruması

## 🚧 Yapılması Gereken SEO Görevleri

### 1. **Domain ve Hosting Ayarları**
```bash
# .env.local dosyasında domain güncelle
NEXT_PUBLIC_DOMAIN=https://yourdomain.com

# All metadata files içinde domain güncelle:
# - src/app/layout.tsx (metadataBase)
# - src/app/sitemap.ts (baseUrl)
# - src/app/robots.ts (host)
# - src/components/StructuredData.tsx (URLs)
```

### 2. **Google Search Console Kurulumu**
- [ ] Domain doğrulama
- [ ] Sitemap submit etme
- [ ] Core Web Vitals takibi
- [ ] Index coverage kontrolü

### 3. **Analytics & Tracking**
```typescript
// Google Analytics 4 ekleme
// src/lib/gtag.ts oluştur ve layout.tsx'e ekle
```

### 4. **Social Media Assets**
Aşağıdaki görselleri oluşturup `/public/images/` klasörüne ekleyin:
- [ ] `og-image.jpg` (1200x630px) - Open Graph
- [ ] `twitter-image.jpg` (1200x675px) - Twitter Card
- [ ] `logo.png` (512x512px) - Structured Data

### 5. **PWA Icons**
`/public/` klasörüne ekleyin:
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `icon-192x192.png`
- [ ] `icon-512x512.png`
- [ ] `apple-touch-icon.png`
- [ ] `safari-pinned-tab.svg`

### 6. **Search Console Verification**
`src/app/layout.tsx` metadata içinde güncelleyin:
```typescript
verification: {
  google: "your-actual-google-verification-code",
  yandex: "your-actual-yandex-verification-code"
}
```

### 7. **Content Optimization**
- [ ] Keyword research ve content güncelleme
- [ ] Internal linking stratejisi geliştirme
- [ ] Blog/Content marketing planı
- [ ] User-generated content (reviews, testimonials)

### 8. **Local SEO** (Türkiye odaklı)
- [ ] Google My Business profili
- [ ] Local citations
- [ ] hreflang implementasyonu (TR/EN)

### 9. **Monitor & Analytics**
- [ ] Google Search Console
- [ ] Google Analytics 4
- [ ] PageSpeed Insights takibi
- [ ] Ahrefs/SEMrush keyword tracking

## 📈 SEO Performance Metrikleri

### Core Web Vitals Hedefleri:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### SEO KPIs:
- Organic traffic artışı
- Keyword rankings
- Click-through rates (CTR)
- Bounce rate azalması
- Page load speed improvements

## 🛠️ Geliştirme Komutları

```bash
# SEO test için build
npm run build

# Bundle analizi
ANALYZE=true npm run build

# Performance test
npm run dev
# Sonra: Chrome DevTools > Lighthouse

# Metadata test
# Sonra: https://developers.facebook.com/tools/debug/
# Twitter: https://cards-dev.twitter.com/validator
```

## 📚 Yararlı SEO Araçları

### Test Araçları:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### SEO Araçları:
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [Ahrefs](https://ahrefs.com/)
- [SEMrush](https://semrush.com/)

## 🎯 Target Keywords (Örnek)

### Primer Keywords:
- "hediye önerisi"
- "AI hediye"
- "yapay zeka hediye"
- "hediye bulma"

### Long-tail Keywords:
- "sevgiliye hediye önerisi AI"
- "doğum günü hediyesi yapay zeka"
- "anneye hediye fikirler AI"
- "kişiselleştirilmiş hediye önerisi"

---

Bu checklist'i takip ederek GiftGenius'un arama motorlarında üst sıralarda yer almasını sağlayabilirsiniz! 🚀
