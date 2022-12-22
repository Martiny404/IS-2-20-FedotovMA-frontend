import { Heading } from '@/components/ui/heading/Heading';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';

export const Basket: FC = () => {
	return (
		<Meta
			title='Страница продуктами в корзине'
			description='Страница корзины с продуктами, которые пойдут в заказ'
		>
			<Heading headingLevel='h1'>Корзина</Heading>
		</Meta>
	);
};
