// abit safer from Array.prototype.join
// default case joiner = ","
// try to mimick 100% join.

export function _join<T>(array: T[], joiner: string | number = "," ): string {
	if (!Array.isArray(array))
		throw new TypeError("_join : bad argument on array parameter");

	if (array.length == 0)
		return ("");

	let res = `${array[0]}`
	for (let i = 1; i < array.length; i++)
		res += joiner as string + (array[i] === undefined || array[i] === null ? "" : array[i]);

	return (res);
}

//========================================
//res += (i > 0 ? joiner : "") + array[i];
