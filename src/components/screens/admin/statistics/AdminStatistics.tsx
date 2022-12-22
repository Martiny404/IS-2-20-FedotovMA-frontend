import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';

import { Heading } from '@/components/ui/heading/Heading';
import { OrdersByTime } from './orders-by-time/OrdersByTime';
import { TopThreeProducts } from './most-ordered-top-three/TopThreeProducts';
import { Meta } from '@/utils/meta/Meta';

export const AdminStatistics: FC = () => {
	return (
		<Meta
			title='Страница статистики в админ-панеле'
			description='Страница, на которой администратору предоставлена отчетность по продуктам и заказам'
		>
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
		</Meta>
	);
};
