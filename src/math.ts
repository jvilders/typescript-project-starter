import type { MathObject, MathResult } from "./math.types.js";

export function sum(a: MathObject, b: MathObject): MathResult<number> {
  console.log("a change");
  return { result: a.number + b.number };
}

export function multiply(a: MathObject, b: MathObject): MathResult<number> {
  return { result: a.number * b.number };
}
