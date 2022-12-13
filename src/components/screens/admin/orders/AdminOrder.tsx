import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';

import { useGetOrderInfo } from '@/hooks/data/order/useGetOrderInfo';

import { FC } from 'react';
import styles from './AdminOrder.module.scss';
import { AdminOrderInfo } from './AdminOrderInfo';

export const AdminOrder: FC = () => {
	const { data, isLoading } = useGetOrderInfo();

	if (!data) {
		return null;
	}

	return (
		<>
			<Heading className={styles.heading} headingLevel='h1'>
				Заказ номер: {data?.id}
			</Heading>
			<Button className={styles.editBtn}>Изменить</Button>

			<AdminOrderInfo order={data} />
		</>
	);
};
