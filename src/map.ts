//custom map filter out undefined type in array

export function _map<T, U>(array: T[], callback: (value: T, index: number, array: T[]) => U): U[] {
	if (!Array.isArray(array))
		throw new TypeError("_map: First argument must be array")
	if (typeof callback !== "function")
		throw new TypeError("_map: Last argument must be function for called back")
	const res: U[] = [];
	for (let i = 0; i < array.length; i++) {
		if (i in array)
			res.push(callback(array[i], i, array));
	}
	return (res);
}
