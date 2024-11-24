import { _eval } from '../eval';

describe('_eval', () => {

  it('+', () => {
    expect(_eval('2 + 3')).toBe(5);
  });

  it('-', () => {
    expect(_eval('5 - 3')).toBe(2);
  });

  it('*', () => {
    expect(_eval('2 * 3')).toBe(6);
  });

  it('/', () => {
    expect(_eval('6 / 2')).toBe(3);
  });

  it('pow', () => {
    expect(_eval('2 ^ 3')).toBe(8);
  });

  it('sin & pi', () => {
    expect(_eval('sin(pi / 2)')).toBeCloseTo(1, 5);
  });

  it('+ & *', () => {
    expect(_eval('2 + 3 * 4')).toBe(14);
  });

  it('invalid characters', () => {
    expect(() => _eval('2 + 3asdfji')).toThrow(`Error evaluate expression : ...`);
  });

  it('division by zero', () => {
    expect(() => _eval('2 / 0')).toThrow('Division by zero');
  });

  it('more than 90 len', () => {
    const longExpression = '2 + 3 '.repeat(30);
    expect(() => _eval(longExpression)).toThrow('expression is too long');
  });

  it('should return NaN', () => {
    expect(() => _eval('sqrt(-1)')).toThrow('invalid mathematic expression');
  });
});
