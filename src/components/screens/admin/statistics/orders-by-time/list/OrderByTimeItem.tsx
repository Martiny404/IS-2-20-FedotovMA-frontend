import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { getAdminUrl } from '@/config/url.config';
import { OrderByTme } from '@/types/order/order-by-time.types';
import { parseDate } from '@/utils/parseDate';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import { parsePrice } from '@/utils/parsePrice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../../Admin.module.scss';

export const OrderByTimeItem: FC<{ item: OrderByTme.IOrder }> = ({ item }) => {
	const router = useRouter();

	const date = parseDate(item.createdAt);

	const [status, color] = parseOrderStatus(item.orderStatus);

	return (
		<li>
			<div className={styles.itemInfo}>
				<span>Номер: {item.id}</span>
				<span>Дата: {date}</span>
				<span>Активность: {item.is_activated ? 'Активен' : 'Неактивен'}</span>
				<span className={color}>Статус: {status}</span>
				<span>Сумма: {item.total && `${parsePrice(item.total)} ₽`}</span>
				<span>Кол-во: {item.orderProducts.length}</span>
				<Link href={getAdminUrl(`clients/${item.user.id}`)}>
					<span>Клиент: {item.user.email}</span>
				</Link>
			</div>
			<button onClick={() => router.push(getAdminUrl(`orders/${item.id}`))}>
				<MaterialIcon muiName='MdModeEditOutline' />
			</button>
		</li>
	);
};
