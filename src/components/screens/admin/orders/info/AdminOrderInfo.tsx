import { Heading } from '@/components/ui/heading/Heading';
import { OrderTypes } from '@/types/order/order.types';
import { parseDate } from '@/utils/parseDate';
import { parseOrderActivated } from '@/utils/parseOrderActivated';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import { parsePrice } from '@/utils/parsePrice';
import clsx from 'clsx';
import { FC } from 'react';
import styles from '../AdminOrder.module.scss';
import { AdminOrderProduct } from './AdminOrderProducts';
import { AdminOrderUser } from './AdminOrderUser';

export const AdminOrderInfo: FC<{ order: OrderTypes.IOrder }> = ({ order }) => {
	const [status, color] = parseOrderStatus(order?.orderStatus);
	const [activated, activatedColor] = parseOrderActivated(order.is_activated);
	const orderDate = parseDate(order.createdAt);

	return (
		<div className={styles.info}>
			<Heading className={styles.heading} headingLevel='h1'>
				Заказ номер: {order.id}
			</Heading>
			<div className={clsx(styles.first, styles.block)}>
				<span>{orderDate}</span>
				<span className={activatedColor}>{activated}</span>
				<span className={color}>{status}</span>
				<span>{parsePrice(order.total)} ₽</span>
			</div>
			<AdminOrderUser
				user={{
					id: order.user.id,
					createdAt: order.user.createdAt,
					email: order.user.email,
					role: order.user.role,
					isActivated: order.user.isActivated,
				}}
			/>
			<div className={clsx(styles.products, styles.block)}>
				<Heading className={styles.heading} headingLevel='h3'>
					Продукты в заказе:
				</Heading>

				<ul className={styles.orderProducts}>
					{order.orderProducts.map(item => (
						<AdminOrderProduct key={item.product.id} orderProduct={item} />
					))}
				</ul>
			</div>
		</div>
	);
};
