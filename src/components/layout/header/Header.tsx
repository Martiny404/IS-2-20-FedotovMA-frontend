import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import React, { FC } from 'react';
import { Navigation } from './navigation/Navigation';

import { Search } from './search/Search';

import styles from './Header.module.scss';
import { useOutside } from '@/hooks/useOutside';

export const Header: FC = () => {
	const { isShow: open, setIsShow: setOpen, ref } = useOutside(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	return (
		<header ref={ref} className={styles.header}>
			<div className={styles.left}>
				<Navigation open={open} handleDrawerClose={handleDrawerClose} />

				{!open ? (
					<button className={styles.burger} onClick={handleDrawerOpen}>
						<MaterialIcon muiName='MenuIcon' />
					</button>
				) : null}

				<Link className={styles.homeLink} href='/'>
					Главная
				</Link>
			</div>

			<Search />
		</header>
	);
};
