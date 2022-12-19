export function parseOrderActivated(isActivated: boolean) {
	return isActivated ? ['Активен', 'green'] : ['Неактивен', 'red'];
}
