import { _isDigit } from "./parseFloat";

// strict type. no need to worry; should i make this parseInt like that common lib.
// now put extend none 0-9 to NaN. or just exclude it like normal parseInt

export function _parseInt(value: string) : number {
	value = value.trim();

	if (value === "")
		return (NaN);

	let res = 0;
	let isNegative = false;

	if (value[0] == '-' || value[0] == '+') {
		if (value[0] == '-')
			isNegative = true;
		value = value.slice(1);
	}

	for (let i = 0; i < value.length; i++) {
		const char = value[i]
		if (_isDigit(char))
			res = (res * 10) + (char.charCodeAt(0) - '0'.charCodeAt(0));
		else if (i === 0)
			return (NaN);
		else
			break;
	}
	return (isNegative ? -res : res);
}
