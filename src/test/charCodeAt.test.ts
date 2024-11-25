import { _charCodeAt } from "../charCodeAt";

describe(_charCodeAt, () => {
	it("normal input", () => {
		expect(_charCodeAt("hello", 0)).toBe(104); // h
		expect(_charCodeAt("hello", 1)).toBe(101); // e
		expect(_charCodeAt("hello", 4)).toBe(111); // o
	})
	
	it("test emoji 2 part (utf32)", () => {
		expect(_charCodeAt("😂", 0)).toBe(0xD83D); // first 16
		expect(_charCodeAt("😂", 1)).toBe(0xDE02); // last 16
	})

	it("should be NaN out", () => {
		expect(_charCodeAt("hello", -1)).toBeNaN(); // negative index
		expect(_charCodeAt("hello", 5)).toBeNaN(); // index more than length
		expect(_charCodeAt("hello", 100)).toBeNaN();
		expect(_charCodeAt("hello", NaN)).toBeNaN(); // NaN index
		expect(_charCodeAt("", 0)).toBeNaN(); // empty string
	})
})
