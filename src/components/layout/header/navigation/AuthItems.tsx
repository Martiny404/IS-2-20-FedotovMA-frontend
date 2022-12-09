import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Navigation.module.scss';

export const AuthItems: FC = () => {
	const { user } = useAuth();
	const { logout } = useActions();

	return (
		<ul className={styles.list}>
			{!user ? (
				<li>
					<Link href='/login' className={styles.link}>
						<div className={styles.icon}>
							<MaterialIcon muiName='LoginIcon' />
						</div>
						<span className={styles.linkText}>Вход</span>
					</Link>
				</li>
			) : (
				<li>
					<button onClick={() => logout()} className={styles.link}>
						<div className={styles.icon}>
							<MaterialIcon muiName='LoginIcon' />
						</div>
						<span className={styles.linkText}>Выход</span>
					</button>
				</li>
			)}
			{user?.role == 'admin' ? (
				<li>
					<Link href='/admin' className={styles.link}>
						<div className={styles.icon}>
							<MaterialIcon muiName='BsFillGearFill' />
						</div>
						<span className={styles.linkText}>Управление</span>
					</Link>
				</li>
			) : null}
		</ul>
	);
};
