import { useGetMe } from '@/hooks/data/users/useGetMe';
import { FC } from 'react';
import { ProfileNavigation } from '../ProfileNavigation';
import { ProfileOrder } from './ProfileOrder';
import styles from '../Profile.module.scss';
import { Meta } from '@/utils/meta/Meta';

export const ProfileOrders: FC = () => {
	const { data: me } = useGetMe();

	const orders = me?.orders || [];

	return (
		<Meta title='Заказы клиента'>
			<div className={styles.wrapper}>
				<ProfileNavigation />
				<ul className={styles.orders}>
					{orders.map(order => (
						<ProfileOrder order={order} key={order.id} />
					))}
				</ul>
			</div>
		</Meta>
	);
};
