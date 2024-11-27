import { _replace } from "../replace"

describe('_replace Fn test', () => {
	it('should normally with good argument', () => {
		expect(_replace("hello world", "world", "universe")).toBe("hello universe");
		expect(_replace("hello world", "hello", "hi")).toBe("hi world");
		expect(_replace("say hello", "hello", "goodbye")).toBe("say goodbye");
		expect(_replace("hello hello hello", "hello", "hi")).toBe("hi hello hello");
		expect(_replace("replace me", "replace me", "done")).toBe("done");
		expect(_replace("aaaaa", "a", "b")).toBe("baaaa");
		expect(_replace("short text", "short", "a very long replacement text")).toBe("a very long replacement text text");
		expect(_replace("a very long text", "very long ", "")).toBe("a text");
	});

	it('should handle empty string', () => {
		expect(_replace("hello world", "world", "")).toBe("hello ");
	});

	it('should handle empty search argument as empty string as real replace', () => {
		expect(_replace("hello world", "", "replace")).toBe("replacehello world");
	})
});
