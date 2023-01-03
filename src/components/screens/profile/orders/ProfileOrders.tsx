import { useGetMe } from '@/hooks/data/users/useGetMe';
import { FC } from 'react';
import { ProfileNavigation } from '../ProfileNavigation';
import { ProfileOrder } from './ProfileOrder';
import styles from '../Profile.module.scss';

export const ProfileOrders: FC = () => {
	const { data: me, cancleOrderMutation } = useGetMe();

	const orders = me?.orders || [];

	return (
		<div className={styles.wrapper}>
			<ProfileNavigation />
			<ul className={styles.orders}>
				{orders.map(order => (
					<ProfileOrder
						handler={(orderId: number) => cancleOrderMutation(orderId)}
						order={order}
						key={order.id}
					/>
				))}
			</ul>
		</div>
	);
};
