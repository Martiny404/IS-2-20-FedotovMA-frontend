import { breadcrumbs } from '@/constants/other';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import styles from './Breadcrumbs.module.scss';

export interface IBreadcrumb {
	link: string;
	title: string;
}

export const Breadcrumbs: FC = () => {
	const router = useRouter();

	const [routes, setRoutes] = useState<IBreadcrumb[]>([]);

	useEffect(() => {
		if (router.pathname === '/') {
			setRoutes([
				{
					title: breadcrumbs[''],
					link: '/',
				},
			]);
			return;
		}

		const splitedPath = router.pathname.split('/');

		const r: IBreadcrumb[] = splitedPath.map(p => {
			const title = breadcrumbs[p];

			return {
				title,
				link: p === '' ? '/' : `/${p}`,
			};
		});

		setRoutes(r);
	}, [router.pathname]);

	return (
		<ul className={styles.breadcrumbs}>
			{routes.map(r => (
				<li key={r.link}>
					<Link
						className={clsx({
							[styles.active]: router.asPath.endsWith(r.link),
						})}
						href={r.link}
					>
						{r.title}
					</Link>
				</li>
			))}
		</ul>
	);
};
