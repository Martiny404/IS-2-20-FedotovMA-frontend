import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import { FC } from 'react';
import { IAdminNavItem } from './nav.interface';
import styles from './AdminNavigation.module.scss';
import clsx from 'clsx';
import { useRouter } from 'next/router';

export const AdminNavigationItem: FC<IAdminNavItem> = ({
	icon,
	link,
	title,
}) => {
	const { asPath } = useRouter();

	return (
		<li
			className={clsx(styles.item, {
				[styles.active]: asPath == link,
			})}
		>
			<Link href={link}>
				<div>
					<MaterialIcon muiName={icon} />
				</div>
				<span>{title}</span>
			</Link>
		</li>
	);
};
