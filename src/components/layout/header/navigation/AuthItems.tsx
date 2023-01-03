import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import styles from './Navigation.module.scss';

export const AuthItems: FC = () => {
	const { user } = useAuth();
	const { logout } = useActions();
	const { push } = useRouter();

	return (
		<ul className={styles.list}>
			{!user ? (
				<li>
					<Link href='/auth' className={styles.link}>
						<div className={styles.icon}>
							<MaterialIcon muiName='LoginIcon' />
						</div>
						<span className={styles.linkText}>Вход</span>
					</Link>
				</li>
			) : (
				<li>
					<button
						onClick={() => {
							logout();
							push('/auth');
						}}
						className={styles.link}
					>
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
