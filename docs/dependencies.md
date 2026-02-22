# Frontend Bagimliliklar

## Production Dependencies

| Paket | Versiyon | Amac |
|-------|----------|------|
| next | ^16.1.6 | React framework (App Router, SSR, SSG) |
| react | ^19.2.4 | UI library |
| react-dom | ^19.2.4 | React DOM renderer |
| tailwindcss | ^4.2.0 | Utility-first CSS framework |
| @tailwindcss/postcss | ^4.2.0 | Tailwind v4 PostCSS entegrasyonu |
| clsx | ^2.1.1 | Conditional class birlestirme |
| tailwind-merge | ^3.5.0 | Tailwind class cakismalarini cozme |

## Dev Dependencies

| Paket | Versiyon | Amac |
|-------|----------|------|
| typescript | ^5.7.0 | TypeScript derleyici |
| @types/node | ^22.0.0 | Node.js tip tanimlari |
| @types/react | ^19.0.0 | React tip tanimlari |
| @types/react-dom | ^19.0.0 | React DOM tip tanimlari |
| eslint | ^9.39.3 | Linter |
| eslint-config-next | ^16.1.6 | Next.js ESLint kurallari |
| eslint-config-prettier | ^10.1.8 | ESLint-Prettier cakisma onleme |
| typescript-eslint | ^8.56.0 | TypeScript ESLint plugin |
| prettier | ^3.8.1 | Kod formatter |
| prettier-plugin-tailwindcss | ^0.7.2 | Tailwind class siralama |
| husky | ^9.1.7 | Git hooks |
| lint-staged | ^16.2.7 | Staged dosyalarda lint |
| @commitlint/cli | ^20.4.2 | Commit mesaj linter |
| @commitlint/config-conventional | ^20.4.2 | Conventional commits kurallari |
| @next/bundle-analyzer | ^16.1.6 | Bundle boyut analizi |

## Neden Bu Paketler?

### clsx + tailwind-merge (cn utility)
- `clsx`: Conditional class isimleri birlestirme (if/else icin)
- `tailwind-merge`: Cakisan Tailwind class'larini akillica cozme
- Birlikte `cn()` fonksiyonu olarak kullanilir
- shadcn/ui ve diger modern UI kutuphanelerinin standardi

### Tailwind v4 vs v3
- `tailwind.config.js` yerine CSS-first konfigurasyon
- Dahili autoprefixer (ayri paket gerekmez)
- Dahili preflight CSS reset
- Daha hizli build sureleri

### ESLint 9 Flat Config
- `.eslintrc` yerine `eslint.config.mjs`
- Daha iyi performans
- Daha okunabilir konfigurasyon
- eslint-config-next v16 native flat config destegi
