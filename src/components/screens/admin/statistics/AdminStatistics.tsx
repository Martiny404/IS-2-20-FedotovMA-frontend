import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';

import { Heading } from '@/components/ui/heading/Heading';
import { OrdersByTime } from './orders-by-time/OrdersByTime';
import { TopThreeProducts } from './most-ordered-top-three/TopThreeProducts';

export const AdminStatistics: FC = () => {
	return (
		<div>
			<AdminNavigation />

			<Heading style={{ marginBottom: 20 }} headingLevel='h2'>
				Топ 3 продукта по продажам
			</Heading>

			<TopThreeProducts />

			<Heading style={{ marginBottom: 20 }} headingLevel='h2'>
				Информация о заказах в промежуток времени
			</Heading>

			<OrdersByTime />
		</div>
	);
};
