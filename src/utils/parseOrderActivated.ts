export function parseOrderActivated(isActivated: boolean) {
	return isActivated ? ['Активирован', 'green'] : ['Неактивирован', 'red'];
}
