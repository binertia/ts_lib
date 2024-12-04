import { _filter } from '../filter';

describe('customFilter', () => {
    it('should filter even numbers', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = _filter(arr, (num) => num % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    it('should return an empty array if not match condition', () => {
        const arr = [1, 3, 5];
        const result = _filter(arr, (num) => num % 2 === 0);
        expect(result).toEqual([]);
    });

    it('should return the same array', () => {
        const arr = [2, 4, 6];
        const result = _filter(arr, (num) => num % 2 === 0);
        expect(result).toEqual([2, 4, 6]);
    });

    it('should handle empty array', () => {
        const arr: number[] = [];
        const result = _filter(arr, (num) => num > 0);
        expect(result).toEqual([]);
    });

    it('should not modify original array', () => {
        const arr = [1, 2, 3, 4];
        _filter(arr, (num) => num % 2 === 0);
        expect(arr).toEqual([1, 2, 3, 4]);
    });

    it('should throw a TypeError', () => {
        expect(() => _filter(null as unknown as any[], (num) => num > 0)).toThrowError(TypeError);
        expect(() => _filter(undefined as unknown as any[], (num) => num > 0)).toThrowError(TypeError);
    });

    it('should throw a TypeError', () => {
        expect(() => _filter([1, 2, 3], null as unknown as any)).toThrowError(TypeError);
        expect(() => _filter([1, 2, 3], undefined as unknown as any)).toThrowError(TypeError);
    });
});
