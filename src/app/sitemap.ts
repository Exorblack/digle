import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.SITE_URL}/our-services`,
      lastModified: new Date(),
    },
  ]
}