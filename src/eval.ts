// should not use regex to make this function also new function approach also left big valuable point to injection attack
// protect more that original eval()

import { evaluate } from "mathjs";

function _eval(expr : string) : number {
	try {
		const res = evaluate(expr)
		if (typeof res != "number" || isNaN(res)) {
			throw new Error("invalid expression input");
		}
		return (res);
	} catch(error) {
		throw new Error('Error evaluate expression : ')
	}
}
