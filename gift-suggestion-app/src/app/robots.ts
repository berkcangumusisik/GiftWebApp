import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://giftgenius.app'; // Update with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/recommend',
          '/api/suggest' // Allow API crawling for documentation
        ],
        disallow: [
          '/favorites', // Private user data
          '/_next/',
          '/api/internal/' // If you have internal APIs
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: [
          '/',
          '/recommend'
        ],
        disallow: [
          '/favorites',
          '/_next/'
        ],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl
  };
}
