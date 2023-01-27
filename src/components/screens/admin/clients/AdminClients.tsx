import { getAdminUrl } from '@/config/url.config';
import { useUser } from '@/hooks/data/users/useGetAllUsers';
import { Meta } from '@/utils/meta/Meta';
import { parseDate } from '@/utils/parseDate';
import { parseUserRole } from '@/utils/parseUserRole';
import { parseUserStatus } from '@/utils/parseUserStatus';
import Link from 'next/link';

import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from './AdminClients.module.scss';

export const AdminClients: FC = () => {
	const { allUsers } = useUser();

	return (
		<Meta
			title='Страница клиентов в админ-панеле'
			description='Страница со списком всех клиентов нашего магазина'
		>
			<div>
				<AdminNavigation />
				<ul className={styles.clients}>
					{allUsers?.map(item => {
						const date = parseDate(item.createdAt);
						const [activated, color] = parseUserStatus(item.isActivated);
						return (
							<Link key={item.id} href={getAdminUrl(`clients/${item.id}`)}>
								<li>
									<span>ID: {item.id}</span>
									<span>Почта: {item.email}</span>
									<span className={styles.color}>Аккаунт: {activated}</span>
									<span>Роль: {parseUserRole(item.role.roleName)}</span>
									<span>Дата регистрации: {String(date)} </span>
								</li>
							</Link>
						);
					})}
				</ul>
			</div>
		</Meta>
	);
};
