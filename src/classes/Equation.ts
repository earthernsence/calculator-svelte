import { MATH_OPERATIONS, MATH_OPERATIONS_SHORTHAND } from "$lib";

export class Equation {
  left: number;
  right: number;
  operator: string;

  constructor(left: number, right: number, operator: string) {
    this.left = left;
    this.right = right;
    this.operator = operator;
  }

  toString(): string {
    return `${this.left} ${this.operator} ${this.right}`;
  }

  evaluate(): string {
    if (this.left === undefined || this.right === undefined || this.operator === undefined) return "";
    const realOperatorName = MATH_OPERATIONS_SHORTHAND.get(this.operator);
    const x = this.left;
    const y = this.right;

    if (y === 0 && this.operator === "/") {
      return "NaN";
    }

    const unformattedResult: number = MATH_OPERATIONS[realOperatorName as keyof typeof MATH_OPERATIONS](x, y);
    return unformattedResult.toPrecision(5);
  }
};