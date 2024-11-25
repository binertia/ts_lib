//prototype charAt(string, pointer)
export function _charAt(value: string, index: number) : string {
	if (index < 0 || index >= value.length)
		return ("");
	return value[index];
}
