import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { UserTypes } from '@/types/user.types';
import { parseUserRole } from '@/utils/parseUserRole';
import { parseUserStatus } from '@/utils/parseUserStatus';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../AdminOrder.module.scss';

export const AdminOrderUser: FC<{ user: UserTypes.IUserInfo }> = ({ user }) => {
	const [activated, color] = parseUserStatus(user.isActivated);

	return (
		<div className={clsx(styles.block, styles.user)}>
			<Heading className={styles.heading} headingLevel='h3'>
				Информация о покупателе:
			</Heading>
			<Link
				className={clsx('my-link', styles.link)}
				href={getAdminUrl(`clients/${user.id}`)}
			>
				Почта: {user.email}
			</Link>
			<span className={color}>Аккаунт: {activated}</span>
			<span>Роль: {parseUserRole(user.role.roleName)}</span>
		</div>
	);
};
