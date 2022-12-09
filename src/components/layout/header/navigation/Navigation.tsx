import { FC } from 'react';
import { MaterialIcon } from '../../../ui/MaterialIcon';
import { NavigationItem } from './NavigationItem';
import { CSSTransition } from 'react-transition-group';
import { AuthItems } from './AuthItems';
import styles from './Navigation.module.scss';
import { useAuth } from '@/hooks/useAuth';

export interface INavigationProps {
	handleDrawerClose: () => void;
	open: boolean;
}

export const Navigation: FC<INavigationProps> = ({
	handleDrawerClose,
	open,
}) => {
	const { user } = useAuth();

	return (
		<CSSTransition
			classNames='header-nav-anim'
			unmountOnExit
			timeout={300}
			in={open}
		>
			<nav className={styles.nav}>
				<div className={styles.block}>
					<button className={styles.headerBtn} onClick={handleDrawerClose}>
						<MaterialIcon muiName='ChevronRight' />
						<span>FedotovShop</span>
					</button>

					<div className='hr'></div>
					<ul className={styles.list}>
						<NavigationItem icon='PersonIcon' link='/profile' title='Профиль' />
						<NavigationItem
							icon='FavoriteIcon'
							link='/wishlist'
							title='Избранное'
							notifications={2}
						/>
						<NavigationItem
							icon='ShoppingCartIcon'
							link='/basket'
							title='Корзина'
						/>
					</ul>
					<div className='hr'></div>
					<AuthItems />
				</div>
			</nav>
		</CSSTransition>
	);
};
