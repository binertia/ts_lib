export function _isNaN(value : unknown ) : boolean {
	switch (typeof value) {
		case "number" :
			return (value !== value);

		case "string" :
			const trimValue = value.trim();
			return (trimValue === "NaN");

		default :
			return (false);
	}
}
