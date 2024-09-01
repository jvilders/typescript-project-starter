import { defineConfig } from "vitest/config";

console.log("for testing");
const TRESHOLD = 80;
export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["html", "text"],
      include: ["src/**/*.ts"],
      thresholds: {
        lines: TRESHOLD,
        branches: TRESHOLD,
        statements: TRESHOLD,
        functions: TRESHOLD,
      },
    },
    include: ["tests/**/*.ts"],
  },
});
