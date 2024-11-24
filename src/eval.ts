// should not use regex to make this function also new function approach also left big valuable point to injection attack
// protect more that original eval()

import { evaluate } from "mathjs";

const exprScope = {
	'+': (x : number, y : number) => x + y,
	'-': (x : number, y : number) => x - y,
	'*': (x : number, y : number) => x * y,
	'/': (x : number, y : number) => x / y,
	'^': (x : number, y : number) => Math.pow(x, y),
	sqrt: Math.sqrt,
	sin: Math.sin,
	cos: Math.cos,
	tan: Math.tan,
	pi: Math.PI,
}

export function _eval(expr : string) : number {
	const validExpression = /^[0-9+\-*/().^a-z\s]*$/;

	if (!validExpression.test(expr)) {
		throw new Error('Invalid char in expression'); // secure input
	}
	if (expr.length > 90) {
		throw new Error('Expression is too long'); // protect injection attack
	}
	try {
		const res = evaluate(expr, exprScope);
		if (typeof res != "number" || isNaN(res)) {
			throw new Error("Invalid mathematic expression");
		}
		if (expr.includes('/') && (res === Infinity || res === -Infinity)) {
			throw new Error('Division by zero');
		}
		return (res);
	} catch(error: unknown) {
		if (error instanceof Error) {
			throw new Error(`Error evaluate expression : ${error.message}`);
		} else {
			throw new Error ('Unknown error');
		}
	}
}
