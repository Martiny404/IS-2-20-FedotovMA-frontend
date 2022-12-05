import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import { Navigation } from './navigation/Navigation';
import { CSSTransition } from 'react-transition-group';

import { Search } from './search/Search';

import styles from './Header.module.scss';
import clsx from 'clsx';
import { useOutside } from '@/hooks/useOutside';

export const Header: FC = () => {
	//const [open, setOpen] = useState<boolean>(false);
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
			<div className={styles.right}>
				<Search />
			</div>
		</header>
	);
};
