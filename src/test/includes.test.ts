import { _includes } from "../includes";

describe("_includes", () => {

  it("simple", () => {
    expect(_includes("hello world", "world")).toBe(true);
    expect(_includes("hello world", "hello")).toBe(true);
    expect(_includes("hello world", "bye")).toBe(false);
  });

  it("with index argument", () => {
    expect(_includes("hello world", "world", 6)).toBe(true);
    expect(_includes("hello world", "world", 7)).toBe(false); // search starts at 7, so it's beyond the range
  });

  it("empty search argument", () => {
    expect(_includes("hello world", "")).toBe(true); // Empty search string is considered as a match everywhere
  });

  it("search more than source", () => {
    expect(_includes("hello", "hello world")).toBe(false);
  });

  it("null input", () => {
    expect(() => _includes(null, "world")).toThrow(TypeError);
    expect(() => _includes("hello world", null)).toThrow(TypeError);
  });
});

