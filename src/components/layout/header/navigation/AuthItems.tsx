import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Navigation.module.scss';

export const AuthItems: FC = () => {
	const isAuth = false;
	return (
		<ul className={styles.authItems}>
			{!isAuth ? (
				<Link href='/login' className={styles.link}>
					<MaterialIcon muiName='LoginIcon' />

					<span className={styles.linkText}>Вход</span>
				</Link>
			) : (
				<button onClick={() => alert('Выход')} className={styles.link}>
					<MaterialIcon muiName='LogoutIcon' />

					<span className={styles.linkText}>Выход</span>
				</button>
			)}
		</ul>
	);
};
