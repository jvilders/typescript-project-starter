// @ts-check
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  // Unless 'ignores' is the only key in the object, the given patterns only apply to that specific configuration.
  // These ignore patterns are intended to be global, so it's in a separate object, even though it looks goofy.
  {
    ignores: ["eslint.config.mjs", "vitest.config.mts", "build/", "coverage/"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        // projectService didn't seem to pick up the tsconfig file,
        // so using the project option instead
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintConfigPrettier,
);
