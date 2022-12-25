export function sliceText(text: string): string {
	let sliced = text.split(' ').slice(0, 7).join(' ');
	if (
		sliced[sliced.length - 1] == ',' ||
		sliced[sliced.length - 1] == '.' ||
		sliced[sliced.length - 1] == '!'
	) {
		sliced = sliced.slice(0, sliced.length - 1);
	}
	return sliced + '...';
}
