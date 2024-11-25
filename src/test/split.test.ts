import { _split } from "../split"

describe("_split", () => {
	it("should run on normal argument", () => {
		expect(_split("hello world")).toStrictEqual(["hello", "world"]);
		expect(_split("hello		world")).toStrictEqual(["hello", "world"]);
		expect(_split("			hello		world		")).toStrictEqual(["hello", "world"]);
	})
	it("should run with delimiter argument", () => {
		expect(_split("hello,world", ',')).toStrictEqual(["hello", "world"]);
		expect(_split("hello  world", ' ')).toStrictEqual(["hello", "world"]);
	})
})
