import { _isFinite } from "../isFinite";

describe('_isFinite', () => {
	it("normal number", () => {
		expect(_isFinite(23)).toBe(true);
	})
	it("string number", () => {
		expect(_isFinite("23")).toBe(true);
	})
	it("infinite", () => {
		expect(_isFinite(Infinity)).toBe(false);
	})
	it("-infinite", () => {
		expect(_isFinite(-Infinity)).toBe(false);
	})
	it("object", () => {
		expect(_isFinite({a: "hello", b :"world"})).toBe(false);
	})
	it("array", () => {
		expect(_isFinite([1, 2])).toBe(false);
	})
})
