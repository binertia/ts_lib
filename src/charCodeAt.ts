// unicode only, strict type only, depend on production only

export function _charCodeAt(value: string, index: number): number {
	if (isNaN(index) || index < 0 || index >= value.length)
		return (NaN);

	const char = value[index];
	const charBuf = Buffer.from(char, 'utf16le');

	if (charBuf.length < 2)
		return charBuf[0];
	else
		return charBuf[0] | (charBuf[1] << 8); // utf-16 max 65535
}
