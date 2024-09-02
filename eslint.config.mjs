// @ts-check
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import fs from "fs-extra";
import path from "path";

// With typed linting, eslint depends on the typescript compiler. I use an eslint specific config
// because I want to check more files than only those I include in the bundled package. Eslint will
// fail to lint any files not included by that config. Instead of duplicating the include patterns
// from that config, I read them in and use them.
function getTsConfigIncludePatterns() {
  const filepath = path.join(import.meta.dirname, "tsconfig.eslint.json");
  const config = JSON.parse(fs.readFileSync(filepath, "utf-8"));
  return config.include;
}
const tsconfigIncludedGlobPatterns = getTsConfigIncludePatterns();

export default tseslint.config(
  // Unless 'ignores' is the only key in the object, the given patterns only apply to that specific configuration.
  // These ignore patterns are intended to be global, so it's in a separate object, even though it looks goofy.
  {
    // You would expect that specifying 'files' would be enough and that everything else would be ignored,
    // you would be wrong (unfortunately). Therefore instead of selecting, I 'unignore' what I want to select.
    ignores: ["*", ...tsconfigIncludedGlobPatterns.map((p) => `!${p}`)],
  },
  {
    languageOptions: {
      globals: globals.node,
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
