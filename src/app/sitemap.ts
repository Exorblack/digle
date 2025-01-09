import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
      priority: 1,
      videos: [
        {
          title: "Digle",
          thumbnail_loc: "/7792630-uhd_4096_2160_25fps.mp4",
          description:
            "Your Digital Journey Starts with Us, Turning Your Ideas into reality",
        },
      ],
    },
  ];
}