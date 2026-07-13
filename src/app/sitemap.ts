import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://arrowfoods.lk'; // Swap with your live domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // If you add dynamic pages later (e.g., /products/chicken-sambol), they loop in here
  ];
}