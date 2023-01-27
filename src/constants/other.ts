export const ANIMATION_TIME = 300;

export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';

export const breadcrumbs: Object & Record<string, string> = {
	['']: 'Главная',
	['admin']: 'Админ-панель',
	['brands']: 'Бренды',
	['categories']: 'Категории',
	['offers']: 'Акции',
	['auth']: 'Авторизация',
	['404']: 'Страница "Не найдено"',
	['products']: 'Товары',
	['clients']: 'Клиенты',
};

export const profileNavigation = [
	{
		title: 'Профиль',
		link: '/profile',
	},
	{
		title: 'Заказы',
		link: '/profile/orders',
	},
];
