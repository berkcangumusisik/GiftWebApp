import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Favori Hediyelerim - GiftGenius",
  description: "Beğendiğiniz hediye önerilerini kaydedin ve kolayca erişin. Favori hediye listesini yönetin ve organize edin.",
  keywords: [
    "favori hediyeler", "hediye listesi", "kaydedilen hediyeler", "hediye favorileri",
    "hediye koleksiyonu", "hediye yönetimi", "kişisel hediye listesi"
  ],
  openGraph: {
    title: "Favori Hediyelerim - GiftGenius",
    description: "Beğendiğiniz hediye önerilerini kaydedin ve kolayca erişin. Favori hediye listesini yönetin.",
    url: "https://giftgenius.app/favorites",
    type: "website"
  },
  twitter: {
    title: "Favori Hediyelerim - GiftGenius",
    description: "Beğendiğiniz hediye önerilerini kaydedin ve kolayca erişin."
  },
  alternates: {
    canonical: "https://giftgenius.app/favorites"
  },
  robots: {
    index: false, // Favorites pages are usually private
    follow: true
  }
};

export default function FavoritesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
