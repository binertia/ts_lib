import { _join } from "../join"

describe("_join", () => {
	it("should run normally", () => {
		expect(_join(["1", "2", 3], "")).toBe("123");
		expect(_join(["1", "2", 3], " ")).toBe("1 2 3");
		expect(_join(["1", NaN, "2", 3], " ")).toBe("1 NaN 2 3");
		expect(_join(["", "", null, undefined, 3])).toBe(",,,,3");
	})
})
