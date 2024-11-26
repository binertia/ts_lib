// prototype fn(src,serch,start = 0)
// -1 if not found
// same logic index as slice negaive index
// WIP: for use with array too
// ((do it need generic type for array?)*)

export function _indexOf(source: string, search: string, start: number = 0): number {
	if (!source || !search)
		return (-1);

	const sourceLen = source.length;
	const searchLen = search.length;

	if (searchLen == 0 || searchLen > sourceLen)
		return (-1);

	start = start < 0 ? Math.max(sourceLen + start, 0) : start;

	if (start >= sourceLen)
		return (-1);

	for (;start <= sourceLen - searchLen; start++) {
		let found = false;

		for (let i = 0; i < searchLen; i++) {
			if (source[start + i] !== search[i])
				break;
			if (i == searchLen - 1)
				found = true;
		}
		if (found)
			return (start);
	}
	return (-1);
}
