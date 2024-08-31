import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // unless files and ignores are the only key in their objects, they will only apply to that specific configuration.
  // These are intended to be global, so they're separate, even though it looks goofy.
  {
    files: ["src/**/*.ts"],
  },
  {
    ignores: [
      "eslint.config.mjs",
      "vitest.config.mts",
      "build/",
      "tests/",
      "scripts/",
      "coverage/",
    ],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
);
// {files: ["src/**/*.{js,mjs,cjs,ts}"]},
