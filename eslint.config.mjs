import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const eslintConfig = [
  ...nextConfig,
  prettierConfig,
  {
    // Genel kurallar (tüm dosyalar)
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
  {
    // TypeScript kuralları (sadece .ts/.tsx)
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  {
    ignores: ["public/", "commitlint.config.ts"],
  },
];

export default eslintConfig;
