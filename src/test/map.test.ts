import { _map } from "../map"

describe("_map", () => {
	it('should return normally', () => {
        const numbers = [1, 2, 3, 4];
        const result = _map(numbers, (value) => value * 2);
        expect(result).toEqual([2, 4, 6, 8]);
    });

    it('should return an empty', () => {
        const result = _map([], (value) => value);
        expect(result).toEqual([]);
    });

    it('should pass validation in every called', () => {
        const numbers = [1, 2, 3];
        const callback = jest.fn((value, index, array) => value + index);
        _map(numbers, callback);
        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenCalledWith(1, 0, numbers);
        expect(callback).toHaveBeenCalledWith(2, 1, numbers);
        expect(callback).toHaveBeenCalledWith(3, 2, numbers);
    });

    it('should throw error', () => {
        const numbers = [1, 2, 3];
        expect(() => _map(numbers, null as unknown as (value: number) => number)).toThrow(
            '_map: Last argument must be function for called back'
        );
        expect(() => _map(numbers, 123 as unknown as (value: number) => number)).toThrow(
            '_map: Last argument must be function for called back'
        );
    });

    it('should not mutate original array', () => {
        const numbers = [1, 2, 3];
        const original = [...numbers];
        _map(numbers, (value) => value * 2);
        expect(numbers).toEqual(original);
    });
})
