// WIP :regex as original
// mimick search argument as empty string?

export function _replace(source: string, search: string, replace: string | ((match: string) => string)): string {
	if (!search) {
		if (typeof replace !== "string")
			return (replace(search) + source);
		return (replace + source);
	}

	let done = false;
	let res = "";
	let i = 0;
	while (i < source.length) {
		let found = false;

		for (let j = 0; j < search.length && !done; j++) {
			if (source[i + j] !== search[j])
				break;
			if (j === search.length - 1) {
				found = true;
				done = true;
			}
		}

		if (found) {
			if (typeof replace === "string") {
				for (let j = 0; j < replace.length; j++)
					res += replace[j];
				i += search.length;
			} else {
				const callbackRes = replace(search);
				for (let j = 0; j < callbackRes.length; j++)
					res += callbackRes[j];
				i += callbackRes.length;
			}
		} else {
			res += source[i];
			i++;
		}
	}

	return (res);
}
