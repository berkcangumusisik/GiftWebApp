import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GiftGenius - AI Hediye Önerisi",
  description: "Yapay zekâ ile en doğru hediyeyi keşfet! AI destekli hediye önerilerimizle sevdiklerinizi şaşırtın.",
  keywords: ["hediye", "AI", "yapay zeka", "hediye önerisi", "gift", "suggestion"],
  authors: [{ name: "GiftGenius Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 via-slate-900 to-indigo-900 relative overflow-x-hidden">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 via-pink-600/10 to-indigo-600/10 animate-pulse"></div>
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          {/* Add padding top for fixed navbar */}
          <div className="pt-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
