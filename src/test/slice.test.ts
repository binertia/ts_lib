import {_slice} from "../slice"

describe("slice()", () => {
  it("should run normal with normal argument", () => {
    expect(_slice("hello world", 0, 5)).toBe("hello");
    expect(_slice("hello world", 6)).toBe("world");
    expect(_slice("hello world", -5)).toBe("world");
    expect(_slice("hello world", 0, -6)).toBe("hello");
    expect(_slice("hello world", 6, 100)).toBe("world");
    expect(_slice("hello world", -100, 5)).toBe("hello");
  });

  it("should return empty strings", () => {
    expect(_slice("", 0, 3)).toBe("");
    expect(_slice("", -2)).toBe("");
    expect(_slice("hello", 3, 1)).toBe("");
    expect(_slice("a", 1)).toBe("");
  });

  it("should mimick origianl", () => {
    expect(_slice("hello", -10, 10)).toBe("hello");
    expect(_slice("hello", 5, 10)).toBe("");
  });
});
