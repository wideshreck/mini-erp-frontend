# Frontend Konfigurasyon Detaylari

## Ortam Degiskenleri

`.env.example` dosyasini `.env.local` olarak kopyala:

```bash
cp .env.example .env.local
```

| Degisken | Varsayilan | Aciklama |
|----------|-----------|----------|
| NEXT_PUBLIC_APP_NAME | Mini ERP | Uygulama adi |
| NEXT_PUBLIC_API_URL | http://localhost:8000/api/v1 | Backend API URL |
| ANALYZE | false | Bundle analyzer aktiflestirir |

`NEXT_PUBLIC_` prefix'li degiskenler client-side'da erisilebilir.

## Security Headers

next.config.ts'de tum route'lara uygulanan headerlar:

| Header | Deger | Koruma |
|--------|-------|--------|
| X-Frame-Options | DENY | Clickjacking - iframe'e gomulmeyi engeller |
| X-Content-Type-Options | nosniff | MIME type sniffing |
| Referrer-Policy | strict-origin-when-cross-origin | Referrer bilgisi sizintisi |
| Permissions-Policy | camera=(), microphone=()... | Tarayici API kisitlamalari |
| Strict-Transport-Security | max-age=31536000; includeSubDomains; preload | HTTPS zorunlu (1 yil) |
| X-XSS-Protection | 1; mode=block | XSS saldiri korunmasi |

## Tailwind CSS v4

Tailwind v4 artik CSS-first konfigurasyon kullaniyor. `tailwind.config.js` YOKTUR.

Tema ozellestirmesi `globals.css` icerisinde yapilir:

```css
@import "tailwindcss";

@theme {
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  /* Yeni tema degiskenleri buraya eklenir */
}
```

## Font Sistemi

Inter fontu `next/font` ile self-host ediliyor:
- Google'a runtime istek gitmiyor
- `display: swap` ile font yukleme beklemez
- CSS variable `--font-inter` uzerinden Tailwind'e bagli

## TypeScript Path Alias

tsconfig.json'da tanimli:
```json
"paths": { "@/*": ["./src/*"] }
```

Kullanim: `import X from "@/lib/utils"` → `src/lib/utils`

## ESLint Kurallari

| Kural | Seviye | Aciklama |
|-------|--------|----------|
| no-console | warn | console.warn/error haric |
| @typescript-eslint/no-unused-vars | error | _ prefix'li haric |
| @typescript-eslint/no-explicit-any | warn | any kullanimi |
| next/core-web-vitals | error | Core Web Vitals kurallari |
| react-hooks/* | error | React hook kurallari |
| jsx-a11y/* | warn | Erisebilirlik kurallari |

## Prettier Ayarlari

| Ayar | Deger |
|------|-------|
| semi | true |
| singleQuote | false |
| tabWidth | 2 |
| trailingComma | all |
| printWidth | 80 |
| endOfLine | lf |
| Tailwind sorting | Aktif (prettier-plugin-tailwindcss) |
