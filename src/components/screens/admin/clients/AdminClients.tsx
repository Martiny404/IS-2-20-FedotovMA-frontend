import { getAdminUrl } from '@/config/url.config';
import { useGetAllUsers } from '@/hooks/data/users/useGetAllUsers';
import { parseDate } from '@/utils/parseDate';
import Link from 'next/link';

import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from './AdminClients.module.scss';

export const AdminClients: FC = () => {
	const clients = useGetAllUsers();

	return (
		<div>
			<AdminNavigation />
			<ul className={styles.clients}>
				{clients?.map(item => {
					const date = parseDate(item.createdAt);
					return (
						<Link key={item.id} href={getAdminUrl(`clients/${item.id}`)}>
							<li>
								<span>ID: {item.id}</span>
								<span>Почта: {item.email}</span>
								<span>
									Аккаунт: {item.isActivated ? 'Активирован' : 'Неактивирован'}
								</span>
								<span>
									Роль:{' '}
									{item.role.roleName === 'admin' ? 'Админ' : 'Пользователь'}
								</span>
								<span>Дата регистрации: {String(date)} </span>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
};
