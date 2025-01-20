import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol:"https",
        hostname:"**",
        pathname:"**"
      }
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
