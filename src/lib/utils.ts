export function to_devnagari_number(number: number | string): string {
	return number.toString().replace(/[0-9]/g, (digit) => {
		return String.fromCharCode(0x966 + +digit);
	});
}

export const ctx_key = Symbol();
