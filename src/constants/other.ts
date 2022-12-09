export const ANIMATION_TIME = 300;

export const IS_SERVER = typeof window === 'undefined';
export const IS_CLIENT = typeof window !== 'undefined';

export const breadcrumbs: Record<string, string> = {
	['']: 'Главная',
	['admin']: 'Админ-панель',
	['brands']: 'Бренды',
	['categories']: 'Категории',
	['offers']: 'Акции',
};
