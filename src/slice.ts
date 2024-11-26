// prototype fn(target, start, end); end has undefine optional
// min max for mimick overflow behave for negative input

export function _slice(str: string, start: number, end?: number): string {
	if (!str)
		return "";

	const len = str.length;
	start = getStart(start, len);
	end = getEnd(end, len);

	let res = "";
	for (; start < end; start++) {
		res += str[start];
	}

	return (res);
}

const getStart = (start: number, len: number): number => {
	if (start < 0)
		return (Math.max(start + len, 0));
	return (Math.min(start, len));
}

const getEnd = (end: number | undefined, len: number): number => {
	if (end === undefined)
		return (len);
	else if (end < 0)
		return (Math.max(len + end, 0));
	return (Math.min(len, end));
}
