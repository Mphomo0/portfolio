import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 1080, 1920],
    imageSizes: [64, 128, 256],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
