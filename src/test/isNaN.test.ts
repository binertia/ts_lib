import { _isNaN } from "../isNaN"

describe('_isNaN', () => {
	it("NaN" , () => {
		expect(_isNaN(NaN)).toBe(true);
	});

	it("NaN string", () => {
		expect(_isNaN("NaN")).toBe(true);
	})

	it("number", () => {
		expect(_isNaN(123)).toBe(false);
	})

	it("Object", () => {
		expect(_isNaN({23: "a", 24: "b"})).toBe(false);
	})

	it("undefine", () => {
		expect(_isNaN(undefined)).toBe(false);
	})

	it("string", () => {
		expect(_isNaN("abc add")).toBe(false);
	})

	it("infinite string", () => {
		expect(_isNaN("infinite")).toBe(false);
	})

	it ("NaN string with space", () => {
		expect(_isNaN("     NaN			")).toBe(true);
	})
})
