export function parseDate(date: string): string {
	const result = new Date(date).toLocaleDateString('ru-RU', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
	return result;
}
