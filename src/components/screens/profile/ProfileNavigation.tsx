import { profileNavigation } from '@/constants/other';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './Profile.module.scss';

export const ProfileNavigation: FC = () => {
	const { asPath } = useRouter();

	return (
		<nav className={styles.nav}>
			<ul>
				{profileNavigation.map(navItem => (
					<li key={navItem.link + navItem.title}>
						<Link
							className={clsx('my-link', {
								['actvie-link']: asPath === navItem.link,
							})}
							href={navItem.link}
						>
							{navItem.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
