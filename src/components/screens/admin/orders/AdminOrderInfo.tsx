import { Heading } from '@/components/ui/heading/Heading';
import { OrderTypes } from '@/types/order/order.types';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import { parsePrice } from '@/utils/parsePrice';
import { parseProductStatus } from '@/utils/parseProductStatus';
import clsx from 'clsx';
import { FC, memo } from 'react';
import styles from './AdminOrder.module.scss';

export const AdminOrderInfo: FC<{ order: OrderTypes.IOrder }> = memo(
	({ order }) => {
		const [status, color] = parseOrderStatus(order?.orderStatus);
		return (
			<div className={styles.info}>
				<div className={clsx(styles.first, styles.block)}>
					<span>{order?.createdAt}</span>
					<span>{order?.is_activated ? 'Активен' : 'Неактивен'}</span>
					<span className={color}>{status}</span>
					<span>{parsePrice(order.total)} ₽</span>
				</div>
				<div className={clsx(styles.second, styles.block)}>
					<ul>
						<Heading style={{ marginBottom: 20 }} headingLevel='h3'>
							Продукты в заказе:
						</Heading>
						{order?.orderProducts.map(item => {
							const [productStatus, productStatusColor] = parseProductStatus(
								item.product.status
							);
							return (
								<li key={item.product.id}>
									<span>Скидка: {item.discount}%</span>
									<span>Цена: {parsePrice(item.price)} ₽</span>
									<span>Кол-во: {item.quantity} шт</span>
									<span>Бренд: {item.product.brand.name}</span>
									<span>Категория:{item.product.category.name}</span>
									<span>Название: {item.product.name}</span>
									<span>В наличии: {item.product.inStock} шт</span>
									<span className={productStatusColor}>
										Статус: {productStatus}
									</span>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
);

AdminOrderInfo.displayName = 'AdminOrderInfo';
