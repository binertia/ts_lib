export function _isFinite(value : any) : boolean {
	if (value === null || value === undefined) {
		return (false);
	}
	if (typeof value === 'number'&& (!(value === Infinity || value === -Infinity || isNaN(value)))) {
		return (true);
	} else if (typeof value === 'string') {
		const num = Number(value);
		if (num !== Infinity && num !== -Infinity && !isNaN(num))
			return (true);
	} else if (typeof value === 'boolean') {
		return (true);
	}
	return (false);
}
