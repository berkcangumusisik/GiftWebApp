import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData, { 
  WebsiteStructuredData, 
  OrganizationStructuredData,
  ServiceStructuredData,
  WebApplicationStructuredData 
} from '@/components/StructuredData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://giftgenius.app'), // Update with your actual domain
  title: {
    default: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
    template: "%s | GiftGenius"
  },
  description: "Yapay zeka destekli hediye önerisi platformu! Sevdikleriniz için en uygun hediyeyi bulun. Kişiselleştirilmiş AI analizi ile doğru hediye seçimi artık çok kolay.",
  keywords: [
    "hediye önerisi", "AI hediye", "yapay zeka hediye", "hediye bulma", "hediye fikirler",
    "doğum günü hediyesi", "sevgiliye hediye", "anneye hediye", "babaya hediye",
    "hediye rehberi", "hediye tavsiyeleri", "kişiselleştirilmiş hediye", "hediye arama",
    "gift suggestions", "AI gift recommendation", "personalized gifts", "gift ideas"
  ],
  authors: [{ name: "GiftGenius Team" }],
  creator: "GiftGenius",
  publisher: "GiftGenius",
  category: "Lifestyle",
  classification: "Gift Recommendation Platform",
  
  // Open Graph (Facebook, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://giftgenius.app",
    siteName: "GiftGenius",
    title: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
    description: "Yapay zeka ile en doğru hediyeyi keşfet! Sevdikleriniz için kişiselleştirilmiş hediye önerileri alın.",
    images: [
      {
        url: "/images/og-image.jpg", // We'll create this
        width: 1200,
        height: 630,
        alt: "GiftGenius - AI Hediye Önerisi Platformu",
        type: "image/jpeg"
      }
    ]
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@giftgenius", // Update with your Twitter handle
    creator: "@giftgenius",
    title: "GiftGenius - AI ile Mükemmel Hediye Önerileri",
    description: "Yapay zeka ile en doğru hediyeyi keşfet! Sevdikleriniz için kişiselleştirilmiş hediye önerileri.",
    images: ["/images/twitter-image.jpg"] // We'll create this
  },

  // Icons and manifest
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/safari-pinned-tab.svg", rel: "mask-icon", color: "#6366f1" }
    ]
  },

  // Manifest for PWA
  manifest: "/manifest.json",

  // Additional metadata
  applicationName: "GiftGenius",
  referrer: "origin-when-cross-origin",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    other: {
      me: ["mailto:hello@giftgenius.app"] // Update with your email
    }
  },

  // Alternates for different languages/regions
  alternates: {
    canonical: "https://giftgenius.app",
    languages: {
      "tr-TR": "https://giftgenius.app",
      "en-US": "https://giftgenius.app/en"
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* Structured Data */}
        <StructuredData data={WebsiteStructuredData} />
        <StructuredData data={OrganizationStructuredData} />
        <StructuredData data={ServiceStructuredData} />
        <StructuredData data={WebApplicationStructuredData} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-slate-900 to-indigo-900 relative overflow-x-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 via-pink-600/10 to-indigo-600/10 animate-pulse"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          {children}
        </main>
      </body>
    </html>
  );
}
