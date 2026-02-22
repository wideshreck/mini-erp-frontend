# Frontend Komutlar

## Gelistirme

```bash
pnpm dev              # Dev server (Turbopack, http://localhost:3000)
pnpm build            # Production build
pnpm start            # Production server
```

## Kod Kalitesi

```bash
pnpm lint             # ESLint kontrolu
pnpm lint:fix         # ESLint otomatik duzeltme
pnpm format           # Prettier ile formatla
pnpm format:check     # Format kontrolu (CI icin)
```

## Analiz

```bash
pnpm analyze          # Bundle analyzer (tarayicida acar)
```

## Git Hooks (Otomatik)

Her commit'te:
1. `pre-commit` → `lint-staged` calisir
   - `.ts/.tsx` dosyalari: eslint --fix + prettier --write
   - `.json/.css/.mjs` dosyalari: prettier --write
2. `commit-msg` → `commitlint` calisir
   - Conventional commit formati zorunlu

## Commit Mesaj Formati

```
<tip>: <aciklama>

# Ornekler:
feat: add login page
fix: resolve auth token refresh
refactor: simplify dashboard layout
style: format header component
perf: optimize image loading
docs: update API integration guide
test: add unit tests for auth
chore: update dependencies
ci: add GitHub Actions workflow
build: configure Docker
revert: undo dashboard refactor
```

Kurallar:
- Tip kucuk harf zorunlu
- Baslik max 72 karakter
- Tip ve konu bos olamaz

## Bagimliliklari Guncelleme

```bash
pnpm update           # Tum paketleri guncelle (semver uyumlu)
pnpm update --latest  # En son surumlere guncelle
```
