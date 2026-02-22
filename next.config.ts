import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        // Clickjacking koruması: sayfanın iframe'e gömülmesini engelle
        { key: "X-Frame-Options", value: "DENY" },
        // MIME type sniffing koruması
        { key: "X-Content-Type-Options", value: "nosniff" },
        // Referrer bilgisini sınırla
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        // Tarayıcı özelliklerini kısıtla
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
        },
        // HTTPS zorunlu (HSTS) — 1 yıl, subdomain dahil
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
        // XSS koruması
        { key: "X-XSS-Protection", value: "1; mode=block" },
      ],
    },
  ],
};

export default withAnalyzer(nextConfig);
