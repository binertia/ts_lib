import { _parseFloat } from "../parseFloat"

describe("_parseFloat", () => {

	// normal use case
	
	it("normal int" , () => {
		expect(_parseFloat("123")).toBe(123);
	})

	it("float", () => {
		expect(_parseFloat("12.3")).toBe(12.3);
	})

	it("minus int", () => {
		expect(_parseFloat("-123")).toBe(-123);
	})

	it("minus float", () => {
		expect(_parseFloat("-12.3")).toBe(-12.3);
	})

	it("float with space around", () => {
		expect(_parseFloat("	13.2    ")).toBe(13.2);
	})

	// simple invalid
	// // already can't run by strict type

	//it("invalid input should be NaN", () => {
	   // expect(_parseFloat(null)).toBeNaN();
	   // expect(_parseFloat(undefined)).toBeNaN();
	   // expect(_parseFloat(123)).toBeNaN();
	   // expect(_parseFloat(true)).toBeNaN();
	 //});

	// condition error & edge case

	it("double minus", () => {
		expect(_parseFloat("--2")).toBeNaN();
	})
	it("non numeric", () => {
		expect(_parseFloat('aaa')).toBeNaN();
		expect(_parseFloat('12a')).toBeNaN();
		expect(_parseFloat('a12')).toBeNaN();
		expect(_parseFloat('NaN')).toBeNaN();
		expect(_parseFloat(' NaN ')).toBeNaN();
	})

	it("empty string", () => {
		expect(_parseFloat('')).toBeNaN();
		expect(_parseFloat(' ')).toBeNaN();
	})

	it("should return NaN when non numeric occure", () => {
		expect(_parseFloat('123ab')).toBeNaN();
		expect(_parseFloat('123.ab')).toBeNaN();
		expect(_parseFloat('123.45a')).toBeNaN();
		expect(_parseFloat('123.45.67')).toBeNaN();
	})

	it("large number", () => {
		expect(_parseFloat('1000000000000')).toBe(1000000000000);
	})
})
