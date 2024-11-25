import {_max} from "../max"

describe("_max", () => {
	it("should run on normal argument", () => {
		expect(_max([1, 2, 3, 4])).toBe(4);
		expect(_max([NaN, 2, 3])).toBe(NaN);
		expect(_max([123, -1 , 4])).toBe(123);
		expect(_max([10, -20, 30, -40, 50])).toBe(50);
	})

	it ("should run on custom compareFn", () => {
		expect(_max([{x: 3}, {x: 4}, {x: 5}], (a, b) => a.x - b.x)).toStrictEqual({x: 5})
		const strings = ["aaa", "bbbbb", "ccccccc"];
        const longest = _max(strings, (a, b) => a.length - b.length);
        expect(longest).toBe("ccccccc");
	})

	it("should not run on bad argument", () => {
		expect(_max([])).toBeUndefined();
	})

	it("should throw error", () => {
        expect(() => _max(null as unknown as any[])).toThrow(
            "max: need array argument on array parameter"
        );
        expect(() => _max("array real real" as unknown as any[])).toThrow(
            "max: need array argument on array parameter"
        );
		expect(() => _max(["a", "b", "c"])).toThrow(
            "max: default compare only can work with number type"
        );
    });
})
