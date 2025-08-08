import Script from 'next/script';

interface StructuredDataProps {
  data: object;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined structured data objects
export const WebsiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "GiftGenius",
  "alternateName": "Gift Genius AI",
  "url": "https://giftgenius.app",
  "description": "Yapay zeka destekli hediye önerisi platformu. Sevdikleriniz için en uygun hediyeyi bulun.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://giftgenius.app/recommend?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    "https://twitter.com/giftgenius",
    "https://facebook.com/giftgenius",
    "https://instagram.com/giftgenius"
  ]
};

export const OrganizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GiftGenius",
  "url": "https://giftgenius.app",
  "logo": "https://giftgenius.app/images/logo.png",
  "description": "AI destekli kişiselleştirilmiş hediye önerisi platformu",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+90-xxx-xxx-xxxx", // Update with real phone
    "contactType": "customer service",
    "availableLanguage": ["Turkish", "English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Istanbul",
    "addressCountry": "TR"
  },
  "sameAs": [
    "https://twitter.com/giftgenius",
    "https://facebook.com/giftgenius"
  ]
};

export const ServiceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Hediye Önerisi Hizmeti",
  "description": "Yapay zeka teknolojisi kullanarak kişiselleştirilmiş hediye önerileri sunan platform",
  "provider": {
    "@type": "Organization",
    "name": "GiftGenius",
    "url": "https://giftgenius.app"
  },
  "serviceType": "Gift Recommendation",
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hediye Kategorileri",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Teknoloji Hediyeler"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lifestyle Hediyeler"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wellness Hediyeler"
        }
      }
    ]
  }
};

export const WebApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "GiftGenius AI",
  "description": "AI destekli hediye önerisi web uygulaması",
  "url": "https://giftgenius.app",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "TRY",
    "description": "Ücretsiz AI hediye önerisi hizmeti"
  },
  "featureList": [
    "AI destekli hediye önerileri",
    "Kişiselleştirilmiş analiz",
    "Favori hediye listesi",
    "Kategori bazlı filtreleme"
  ]
};

export const FAQStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "GiftGenius nasıl çalışır?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "GiftGenius, yapay zeka teknolojisini kullanarak hediye alacağınız kişinin yaşı, cinsiyeti, ilgi alanları ve bütçeniz gibi bilgileri analiz eder ve size en uygun hediye önerilerini sunar."
      }
    },
    {
      "@type": "Question",
      "name": "Hizmet ücretsiz mi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, GiftGenius tamamen ücretsiz bir hizmettir. AI destekli hediye önerilerini hiçbir ücret ödemeden alabilirsiniz."
      }
    },
    {
      "@type": "Question",
      "name": "Hangi kategorilerde hediye önerisi alabilir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teknoloji, lifestyle, wellness, eğitim, spor, moda, hobi ve daha birçok kategoride hediye önerisi alabilirsiniz. AI sistemi size en uygun kategoriyi otomatik olarak belirler."
      }
    },
    {
      "@type": "Question",
      "name": "Hediye önerilerini kaydedebilir miyim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Evet, beğendiğiniz hediye önerilerini favorilerinize ekleyebilir ve daha sonra kolayca erişebilirsiniz."
      }
    }
  ]
};
