import { getAdminUrl } from '@/config/url.config';
import { IAdminNavItem } from './nav.interface';

export const navItems: IAdminNavItem[] = [
	{
		icon: 'TbReportAnalytics',
		link: '/admin',
		title: 'Отчеты',
	},
	{
		icon: 'FaUsers',
		link: getAdminUrl('clients'),
		title: 'Клиенты',
	},
	{
		icon: 'DevicesOtherIcon',
		link: getAdminUrl('products'),
		title: 'Товары',
	},
	{
		icon: 'GrUserWorker',
		link: getAdminUrl('brands'),
		title: 'Бренды',
	},
	{
		icon: 'MdCategory',
		link: getAdminUrl('categories'),
		title: 'Категории',
	},

	{
		icon: 'GoPackage',
		link: getAdminUrl('orders'),
		title: 'Заказы',
	},
	{
		icon: 'DiscountIcon',
		link: getAdminUrl('offers'),
		title: 'Акции',
	},
];
