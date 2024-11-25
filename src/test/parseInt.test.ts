import { _parseInt } from "../parseInt";

describe("_parseInt", () => {
	it("number string", () => {
		expect(_parseInt("123")).toBe(123);
		expect(_parseInt("10000000000000000000")).toBe(10000000000000000000);
		expect(_parseInt("123.4")).toBe(123);
		expect(_parseInt("-123.4")).toBe(-123);
		expect(_parseInt("+123.4")).toBe(123);
	})
	it("invalid string", () => {
		expect(_parseInt("")).toBe(NaN);
		expect(_parseInt(" ")).toBe(NaN);
		expect(_parseInt("asdfvji3")).toBe(NaN);
		expect(_parseInt("-asdfvji3")).toBe(NaN);
	})
})
