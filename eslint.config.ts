import js from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser }
  },
  tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  globalIgnores(["dist/**", "node_modules/**", ".astro/**"]),
  {
    rules: {
      "comma-dangle": ["error", "never"],
      "max-len": ["error", { code: 120, ignoreComments: true }],
      "no-console": ["error", { allow: ["warn", "error"] }],
      "quote-props": ["error", "consistent"],
      "quotes": ["error", "double", { avoidEscape: true }]
    }
  }
]);
