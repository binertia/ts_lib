import { _charAt } from "../charAt"
describe("_charAt", () => {
	//simple string input
	it("simple string input", () => {
		expect(_charAt("hello", 0)).toBe("h");
		expect(_charAt("hello", 1)).toBe("e");
		expect(_charAt("hello", 4)).toBe("o");
	})

	//bad input
	it("bad input", () => {
		expect(_charAt("", 0)).toBe("");
		expect(_charAt("", 4)).toBe("");
		expect(_charAt("", NaN)).toBe("");
		expect(_charAt("asdfjivj", NaN)).toBe("");
		expect(_charAt("asdfjivj", -1)).toBe("");
	})
})
