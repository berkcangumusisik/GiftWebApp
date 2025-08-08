import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hediye Önerisi Al - GiftGenius",
  description: "AI destekli hediye önerisi formunu doldurun ve sevdikleriniz için en uygun hediyeyi keşfedin. Kişiselleştirilmiş yapay zeka analizi ile mükemmel hediye bulun.",
  keywords: [
    "hediye formu", "AI hediye önerisi", "kişiselleştirilmiş hediye", "hediye bulma aracı",
    "hediye rehberi", "doğum günü hediyesi", "sevgililer günü hediyesi", "hediye fikirleri"
  ],
  openGraph: {
    title: "Hediye Önerisi Al - GiftGenius",
    description: "AI destekli hediye önerisi formunu doldurun ve sevdikleriniz için en uygun hediyeyi keşfedin.",
    url: "https://giftgenius.app/recommend",
    type: "website"
  },
  twitter: {
    title: "Hediye Önerisi Al - GiftGenius",
    description: "AI destekli hediye önerisi formunu doldurun ve sevdikleriniz için en uygun hediyeyi keşfedin."
  },
  alternates: {
    canonical: "https://giftgenius.app/recommend"
  }
};

export default function RecommendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
