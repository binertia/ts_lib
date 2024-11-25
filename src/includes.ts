//math.max can handle NaN and infinity, do it need more guard on it?
//if except null maybe can use more dynamically

export function _includes(source: string | null, search: string | null, fromIndex: number = 0): boolean {
	if (source == null || search == null)
		throw new TypeError("_includes: argument is null or undefined");

	for (let i = Math.max(fromIndex, 0); i <= source.length - search.length; i++) {
		if (source.substring(i, i + search.length) == search)
			return (true);
	}
	return (false);
}
