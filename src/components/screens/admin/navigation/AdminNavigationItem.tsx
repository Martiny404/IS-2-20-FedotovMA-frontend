import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import { FC } from 'react';
import { IAdminNavItem } from './nav.interface';
import styles from './AdminNavigation.module.scss';

export const AdminNavigationItem: FC<IAdminNavItem> = ({
	icon,
	link,
	title,
}) => {
	return (
		<li className={styles.item}>
			<Link href={link}>
				<div>
					<MaterialIcon muiName={icon} />
				</div>
				<span>{title}</span>
			</Link>
		</li>
	);
};
