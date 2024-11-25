export function _split(source: string, delimiter?: string): string[] {

	if (typeof source !== "string")
		throw new TypeError("_split: bad argument in source parameter");

	if (delimiter !== undefined && typeof delimiter !== "string")
		throw new TypeError("_split: bad argument in delimiter parameter");

	const res: string[] = [];
	let buffer = "";

	for (let i = 0; i < source.length; i++) {
		if (source[i] === delimiter || (delimiter === undefined && /\s/.test(source[i]))) {
			if (buffer) {
				res.push(buffer);
				buffer = "";
			}
		} else {
			buffer += source[i];
		}
	}

	if (buffer)
		res.push(buffer);

	return (res);
}
