import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './AdminNavigation.module.scss';
import { AdminNavigationItem } from './AdminNavigationItem';
import { navItems } from './nav.data';

export const AdminNavigation: FC = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				{navItems.map(item => (
					<AdminNavigationItem
						key={item.link}
						title={item.title}
						icon={item.icon}
						link={item.link}
					/>
				))}
			</ul>
		</nav>
	);
};
