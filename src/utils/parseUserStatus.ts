export function parseUserStatus(isActivated: boolean) {
	return isActivated ? ['Активирован', 'green'] : ['Неактивирован', 'red'];
}
