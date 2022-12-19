import { Heading } from '@/components/ui/heading/Heading';

import { useOrder } from '@/hooks/data/order/useOrder';

import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import { AdminEditOrder } from './edit/AdminEditOrder';
import { AdminOrderInfo } from './info/AdminOrderInfo';

export const AdminOrder: FC = () => {
	const { data } = useOrder();

	if (!data) {
		return (
			<>
				<AdminNavigation />
				<Heading headingLevel='h1'>Заказ не найден!</Heading>
			</>
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
