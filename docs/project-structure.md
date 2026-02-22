# Frontend Proje Yapisi

## Teknoloji Stack

| Teknoloji | Versiyon | Amac |
|-----------|----------|------|
| Next.js | 16.1.6 | React framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.9 | Tip guvenligi |
| Tailwind CSS | 4.2.0 | Utility-first CSS (v4 - CSS-first config) |
| pnpm | 10.30 | Paket yoneticisi |

## Dizin Yapisi

```
frontend/
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout (Inter font, lang=tr)
│   │   ├── page.tsx          # Ana sayfa (/)
│   │   └── globals.css       # Tailwind import + font theme
│   └── lib/
│       └── utils.ts          # cn() utility (clsx + tailwind-merge)
├── public/                   # Statik dosyalar
├── docs/                     # Proje dokumantasyonu
├── .husky/
│   ├── pre-commit            # lint-staged calistirir
│   └── commit-msg            # commitlint calistirir
├── next.config.ts            # Next.js konfigurasyon
├── tsconfig.json             # TypeScript konfigurasyon
├── eslint.config.mjs         # ESLint flat config
├── postcss.config.mjs        # Tailwind PostCSS plugin
├── commitlint.config.ts      # Conventional commits
├── .prettierrc               # Prettier ayarlari
├── .prettierignore           # Prettier ignore
├── .gitattributes            # LF line endings
├── .gitignore                # Git ignore
├── .env.example              # Ortam degiskenleri referansi
├── package.json              # Bagimliliklar + scripts + lint-staged
└── pnpm-lock.yaml            # Lock file
```

## Onemli Dosyalar

### next.config.ts
- `reactStrictMode: true` - React hata tespiti
- `poweredByHeader: false` - X-Powered-By header kaldirildi
- `images.formats: ["image/avif", "image/webp"]` - Modern resim formatlari
- `compiler.removeConsole` - Production'da console.log silme
- `headers()` - Security headers (HSTS, X-Frame-Options, CSP vb.)
- `withBundleAnalyzer` - ANALYZE=true ile bundle analizi

### tsconfig.json
- `strict: true` - Tam tip guvenligi
- `paths: { "@/*": ["./src/*"] }` - Import alias
- `jsx: "react-jsx"` - React 19 automatic runtime
- `incremental: true` - Artimsal derleme

### eslint.config.mjs
- `eslint-config-next` - Next.js core-web-vitals + React + a11y + import kurallari
- `typescript-eslint` - TypeScript kurallar: no-unused-vars (error), no-explicit-any (warn)
- `eslint-config-prettier` - Prettier ile cakisma onleme
- `no-console: warn` - console.warn/error haric

### globals.css
- `@import "tailwindcss"` - Tailwind v4 (preflight dahil)
- `@theme { --font-sans }` - Inter font CSS variable

## Path Alias

```tsx
// Kullanim:
import { cn } from "@/lib/utils";
// Yukardaki aslinda:
import { cn } from "./src/lib/utils";
```

## cn() Utility

```tsx
import { cn } from "@/lib/utils";

// Conditional class'lar:
cn("px-4 py-2", isActive && "bg-blue-500")

// Class cakismalarini cozer:
cn("px-4", "px-8") // => "px-8" (tailwind-merge sayesinde)

// Component prop olarak:
cn("base-styles", className)
```
