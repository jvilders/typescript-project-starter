import { sum, multiply } from "../src/math.js";
import { describe, it, expect } from "vitest";

describe("sum", () => {
  it("should add numbers", () => {
    const result = sum({ number: 1 }, { number: 2 });
    expect(result).toStrictEqual({ result: 3 });
  });
});

describe("multiply", () => {
  it("should multiply numbers", () => {
    const result = multiply({ number: 2 }, { number: 2 });
    expect(result).toStrictEqual({ result: 4 });
  });
});
