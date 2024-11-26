import { _trim, _trimEnd, _trimStart } from "../trim"

describe("_trim", () => {
	it("should run in normal argument", () => {
		expect(_trim("hello world")).toBe("hello world");
		expect(_trim("		hello world")).toBe("hello world");
		expect(_trim("	\n	\rhello world		\n\r")).toBe("hello world");
		expect(_trim(". hello world		\n\r")).toBe(". hello world");
	})

	it("should handle none argument", () => {
		expect(_trim("")).toBe("");
	})
})

describe("_trimEnd", () => {
	it("should run in normal argument", () => {
		expect(_trimEnd("hello world")).toBe("hello world");
		expect(_trimEnd("		hello world")).toBe("		hello world");
		expect(_trimEnd("	\n	\rhello world		\n\r")).toBe("	\n	\rhello world");
		expect(_trimEnd(". hello world		\n\r")).toBe(". hello world");
	})
})

describe("_trimStart", () => {
	it("should run in normal argument", () => {
		expect(_trimStart("hello world")).toBe("hello world");
		expect(_trimStart("		hello world")).toBe("hello world");
		expect(_trimStart("	\n	\rhello world		\n\r")).toBe("hello world		\n\r");
		expect(_trimStart(". hello world		\n\r")).toBe(". hello world		\n\r");
	})
})
