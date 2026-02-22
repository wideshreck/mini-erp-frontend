import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Tip zorunlu: feat, fix, docs, style, refactor, perf, test, chore, ci, build, revert
    "type-enum": [
      2,
      "always",
      [
        "feat", // Yeni özellik
        "fix", // Hata düzeltme
        "docs", // Dokümantasyon
        "style", // Formatlama (kod davranışı değişmez)
        "refactor", // Yeniden yapılandırma
        "perf", // Performans iyileştirme
        "test", // Test ekleme/düzeltme
        "chore", // Build/tooling değişiklikleri
        "ci", // CI/CD değişiklikleri
        "build", // Build sistemi değişiklikleri
        "revert", // Geri alma
      ],
    ],
    // Başlık max 72 karakter
    "header-max-length": [2, "always", 72],
    // Tip küçük harf zorunlu
    "type-case": [2, "always", "lower-case"],
    // Konu boş olamaz
    "subject-empty": [2, "never"],
    // Tip boş olamaz
    "type-empty": [2, "never"],
  },
};

export default config;
