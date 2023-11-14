import { writable } from "svelte/store";
import type { Equation } from "$lib";

export const displayValue = writable("0");
export const previousEquation = writable<string>("");
export const equationHistory = writable<Array<Equation>>([]);

export const currentEquation = writable<Equation>();
export const currentLeft = writable(0);
export const currentRight = writable(0);
export const currentOperator = writable("");