type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

export function _filter<T>(array: T[], callback: FilterCallback<T>): T[] {
	if (!Array.isArray(array))
		throw new TypeError("_filter: first argument must be array");
	if (typeof callback !== "function")
		throw new TypeError("_filter: last argument must be function");

	const res: T[] = [];
	for (let i = 0; i < array.length; i++) {
		if (!(i in array))
			continue;

		const value = array[i];
		if (callback(value, i, array))
			res.push(value);
	}
	return (res);
}
