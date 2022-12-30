import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { HorizontalProductCard } from '@/components/ui/horizontal-product-card/HorizontalProductCard';
import { useGetUserBasket } from '@/hooks/data/users/useGetUserBasket';
import { Meta } from '@/utils/meta/Meta';
import { parsePrice } from '@/utils/parsePrice';
import { FC } from 'react';
import styles from './Basket.module.scss';

export const Basket: FC = () => {
	const { data } = useGetUserBasket();

	const products = data.map(item => ({
		p: item.product.discount_percentage
			? item.product.price -
			  item.product.price * (item.product.discount_percentage / 100)
			: item.product.price,
		q: item.quantity,
	}));

	const total = products.reduce((acc, v) => acc + v.p * v.q, 0);

	const orderProducts = data.map(item => ({
		productId: item.product.id,
		quantity: item.quantity,
	}));

	return (
		<Meta
			title='Страница продуктами в корзине'
			description='Страница корзины с продуктами, которые пойдут в заказ'
		>
			<Heading headingLevel='h1'>Корзина</Heading>
			<ul style={{ marginTop: 30 }}>
				{data.map(item => (
					<HorizontalProductCard
						key={item.id}
						isRemoved={true}
						product={item.product}
						quantity={item.quantity}
						isIncremental
					/>
				))}
			</ul>
			<div className={styles.block}>
				<strong>Общая сумма: {parsePrice(total)} ₽</strong>
				<Button>оформить заказ</Button>
			</div>
		</Meta>
	);
};
