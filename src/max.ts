export function _max<T>(array: T[], compareFn?: (a: T, b: T) => number): T | undefined {

	if (!Array.isArray(array))
		throw new TypeError("max: need array argument on array parameter");

	if (array.length === 0)
		return (undefined);

	if (!compareFn) {
		if (typeof array[0] !== "number")
			throw new TypeError("max: default compare only can work with number type")
		compareFn = (a, b) => (a as number) - (b as number); //default case
	}

	let maxValue = array[0];
	for (let i = 0; i < array.length; i++) {
		if (compareFn(maxValue, array[i]) < 0)
			maxValue = array[i];
	}
	return (maxValue);
}
