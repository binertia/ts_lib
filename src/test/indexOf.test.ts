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
		expect(_indexOf("h3llo world", 3)).toBe(1);
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

	// array
	
	it("should run normal with nromal argument as array", () => {
    expect(_indexOf([1, 2, 3, 4], 3)).toBe(2);
    expect(_indexOf([1, 2, 3, 4], 5)).toBe(-1);
    expect(_indexOf([1, 2, 3, 4], 3, 1)).toBe(2);
    expect(_indexOf([1, 2, 3, 4], 2, -3)).toBe(1);
    expect(_indexOf(['apple', 'banana', 'cherry'], 'banana')).toBe(1);
  });

	it("should run like .indexOf when any type in argument", () => {
		expect(_indexOf("undefined friend", undefined)).toBe(0);
		expect(_indexOf("little undefined friend", undefined)).toBe(7);
		expect(_indexOf(["little", undefined, "friend"], undefined)).toBe(1);
		expect(_indexOf(["little", null, "friend"], null)).toBe(1);
	})

})
