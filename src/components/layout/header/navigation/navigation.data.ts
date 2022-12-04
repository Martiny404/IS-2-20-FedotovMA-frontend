import { INavItem } from './NavigatiomItem';

export const menu: INavItem[] = [
	{
		title: 'Профиль',
		link: '/profile',
		icon: 'PersonIcon',
	},
	{
		title: 'Избранное',
		link: '/wishlist',
		icon: 'FavoriteIcon',
	},
	{
		title: 'Корзина',
		link: '/basket',
		icon: 'ShoppingCartIcon',
	},
];
