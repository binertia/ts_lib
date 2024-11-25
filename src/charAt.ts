import { _isNaN } from "./isNaN";
//prototype charAt(string, pointer)
export function _charAt(value: string, index: number) : string {
	if (_isNaN(index) || index < 0 || index >= value.length)
		return ("");
	return value[index];
}
