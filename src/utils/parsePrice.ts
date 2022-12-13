export function parsePrice(price: number) {
	return new Intl.NumberFormat('ru-RU').format(price);
}
