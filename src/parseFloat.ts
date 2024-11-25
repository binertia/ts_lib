export function _parseFloat(value : string) : number {
	value = value.trim();

	if (value === "")
		return (NaN);

	let res = 0;
	let posPoint = 1;
	let afterPoint = false;
	let isNegative = false;

	if (value[0] == '-' || value[0] == '+') {
		if (value[0] == '-')
			isNegative = true;
		value = value.slice(1);
	}

	for (let i = 0; i < value.length; i++) {
		const char = value[i]
		if (char === '.' && !afterPoint)
			afterPoint = true;
		else if (_isDigit(char)) {
			const digit = char.charCodeAt(0) - '0'.charCodeAt(0);
			if (afterPoint) {
				res += digit / Math.pow(10, posPoint);
				posPoint++;
			} else {
				res = res * 10 + digit;
			}
		} else {
			return (NaN);
		}
	}

	if (isNegative)
		return (-res);
	return (res);
}

export function _isDigit(char: string) : boolean {
	return (char >= '0' && char <= '9')
}
