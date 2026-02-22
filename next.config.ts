import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sıkı mod: React hatalarını erken yakala
  reactStrictMode: true,

  // Powered-by header'ını kaldır (güvenlik + küçük perf)
  poweredByHeader: false,

  // Resimleri optimize et
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Production build optimizasyonları
  compiler: {
    // Production'da console.log'ları sil
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
