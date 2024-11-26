export function _trim(str: string): string {
	if (!str)
		return "";

	let res = "";
	const end = getEnd(str);
	for (let start = getStart(str); start <= end; start++) {
		res += str[start];
	}
	return (res);
}

export function _trimStart(str: string): string {
	if (!str)
		return "";

	let res = "";
	for (let start = getStart(str); start < str.length; start++) {
		res += str[start];
	}

	return (res);
}

export function _trimEnd(str: string): string {
	if (!str)
		return "";

	const end = getEnd(str)
	let res = "";
	for (let i = 0; i <= end; i++) {
		res += str[i];
	}

	return (res);
}

function getStart(str: string): number {
	let i = 0;

	while (i < str.length && isSpace(str[i])) {
		i++;
	}

	return (i);
}

function getEnd(str: string): number {
	let i = str.length - 1;

	while (i >= 0 && isSpace(str[i])) {
		i--;
	}

	return (i);
}

function isSpace(str: string): boolean {
	if (str === ' ' || str === '\t' || str === '\n' || str === '\r')
		return (true);
	return (false);
}
