import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { HorizontalProductCard } from '@/components/ui/horizontal-product-card/HorizontalProductCard';
import { useGetUserBasket } from '@/hooks/data/users/useGetUserBasket';
import { CreateOrderDto, CreateOrderItem } from '@/services/order.service';
import { Meta } from '@/utils/meta/Meta';
import { parsePrice } from '@/utils/parsePrice';
import { FC } from 'react';
import styles from './Basket.module.scss';

export const Basket: FC = () => {
	const { data, createOrderMutation } = useGetUserBasket();

	const products = data.map(item => ({
		p: item.product.discount_percentage
			? item.product.price -
			  item.product.price * (item.product.discount_percentage / 100)
			: item.product.price,
		q: item.quantity,
	}));

	const total = products.reduce((acc, v) => acc + v.p * v.q, 0);

	const orderProducts: CreateOrderItem[] = data.map(item => ({
		productId: item.product.id,
		quantity: item.quantity,
	}));

	const dto: CreateOrderDto = {
		orderProducts: orderProducts,
	};
	console.log(dto);

	return (
		<Meta
			title='Корзина товаров'
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
				<Button
					className={styles.btn}
					disabled={dto.orderProducts.length == 0}
					onClick={() => createOrderMutation(dto)}
				>
					оформить заказ
				</Button>
			</div>
		</Meta>
	);
};
