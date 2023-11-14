export const MATH_OPERATIONS_SHORTHAND = new Map([
  ["+", "ADDITION"],
  ["-", "SUBTRACTION"],
  ["*", "MULTIPLICATION"],
  ["/", "DIVISION"]
]);

export const MATH_OPERATIONS = {
  "ADDITION": (left: number, right: number) => left + right,
  "SUBTRACTION": (left: number, right: number) => left - right,
  "MULTIPLICATION": (left: number, right: number) => left * right,
  "DIVISION": (left: number, right: number) => left / right,
}