import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["html", "text"],
      include: ["src/**/*.ts"],
      thresholds: {
        lines: 80,
      },
    },
    include: ["tests/**/*.ts"],
  },
});
