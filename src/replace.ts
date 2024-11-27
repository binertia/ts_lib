// WIP :regex & reciept function support as original
// mimick search argument as empty string?

export function _replace(source: string, search: string, replace: string): string {
	if (!search) {
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
			for (let j = 0; j < replace.length; j++)
				res += replace[j];
			i += search.length;
		} else {
			res += source[i];
			i++;
		}
	}

	return (res);
}
