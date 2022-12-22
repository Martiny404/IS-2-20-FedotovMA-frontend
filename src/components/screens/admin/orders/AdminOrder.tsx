import { Heading } from '@/components/ui/heading/Heading';

import { useOrder } from '@/hooks/data/order/useOrder';
import { Meta } from '@/utils/meta/Meta';

import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import { AdminEditOrder } from './edit/AdminEditOrder';
import { AdminOrderInfo } from './info/AdminOrderInfo';

export const AdminOrder: FC = () => {
	const { data } = useOrder();

	if (!data) {
		return (
			<Meta
				title='Страница заказа в админ-панеле'
				description='На этой странице можно просматривать информацию о заказе, сменить его статус, активность или удалить'
			>
				<AdminNavigation />
				<Heading headingLevel='h1'>Заказ не найден!</Heading>
			</Meta>
		);
	}

	return (
		<>
			<AdminNavigation />

			<AdminEditOrder order={data} />

			<AdminOrderInfo order={data} />
		</>
	);
};
