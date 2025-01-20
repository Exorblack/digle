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
        protocol: "https",
        hostname: "www.digle.org",
        pathname: "/_next/image",
      },
      {
        protocol: "https",
        hostname: "www.digle.org",
      },
    ],
  },
};

export default nextConfig;
