import { _indexOf } from "../indexOf"

describe("_indexOf_string", () => {
	it("should run normal with normal argument", () => {
		expect(_indexOf("hello world", "hello")).toBe(0);
		expect(_indexOf("hello world", "yello")).toBe(-1);
		expect(_indexOf("hello world", "ello")).toBe(1);
		expect(_indexOf("hello world", "llo")).toBe(2);
		expect(_indexOf("hello world", "l", 4)).toBe(9);
		expect(_indexOf("hello world", "l", 3)).toBe(3);
		expect(_indexOf("aaaaa", "aa", 2)).toBe(2);
	})
	it("should handle empty string", ()=> {
		expect(_indexOf("", "123")).toBe(-1);
		expect(_indexOf("asdf", "")).toBe(-1);
		expect(_indexOf("", "")).toBe(-1);
	})
	it("should handle negative start ", ()=> {
		expect(_indexOf("hello world", "llo", -9)).toBe(2);
		expect(_indexOf("hello world", "or", -8)).toBe(7);
	})
	it("should handle bad input", () => {
		expect(_indexOf("hello world", "hello", NaN)).toBe(-1);
	})
})
