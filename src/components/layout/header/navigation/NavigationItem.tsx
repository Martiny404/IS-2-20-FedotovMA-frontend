import { MaterialIconType, MaterialIcon } from '@/components/ui/MaterialIcon';
import clsx from 'clsx';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Navigation.module.scss';

export interface INavItem {
	title: string;
	link: string;
	text?: string;
	notifications?: number;
	icon: MaterialIconType;
}

export const NavigationItem: FC<INavItem> = ({
	link,
	title,
	notifications,
	text,
	icon,
}) => {
	const { asPath } = useRouter();

	return (
		<li>
			<Link
				href={link}
				className={clsx(styles.link, {
					['actvie-link ']: asPath === link,
				})}
			>
				<div className={styles.icon}>
					<MaterialIcon muiName={icon} />
					{notifications ? (
						<div className={styles.badge}>{notifications}</div>
					) : null}
				</div>
				<span className={styles.linkText}>
					{text ? `${title}: ${text}` : title}
				</span>
			</Link>
		</li>
	);
};
