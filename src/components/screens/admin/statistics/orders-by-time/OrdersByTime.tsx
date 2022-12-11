import { SkeletonLoader } from '@/components/ui/skeleton/SkeletonLoader';
import { useGetOrdersByTime } from '@/hooks/data/statistic/useGetOrdersByTime';
import { FC } from 'react';

import styles from '../Admin.module.scss';

export const OrdersByTime: FC = () => {
	const { data: ordersByTime, isLoading: isOrdersByTimeLoading } =
		useGetOrdersByTime();

	if (isOrdersByTimeLoading) {
		<SkeletonLoader
			width='100%'
			className={styles.loader}
			height={100}
			count={5}
		/>;
	}

	return (
		<ul>
			{ordersByTime?.map(item => (
				<li key={item.id}>
					{item.id} -- {item.orderStatus}
				</li>
			))}
		</ul>
	);
};
