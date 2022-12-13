import { OrderByTme } from '@/types/order/order-by-time.types';
import { FC } from 'react';
import styles from '../../Admin.module.scss';
import { OrderByTimeItem } from './OrderByTimeItem';
export const OrderByTimeList: FC<{ items: OrderByTme.IOrder[] }> = ({
	items,
}) => {
	return (
		<ul className={styles.list}>
			{items?.map(item => (
				<OrderByTimeItem key={item.id} item={item} />
			))}
		</ul>
	);
};
