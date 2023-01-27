import { Button } from '@/components/ui/form-elements/Button';
import { useGetUserBasket } from '@/hooks/data/users/useGetUserBasket';
import { useGetUserWishlist } from '@/hooks/data/users/useGetUserWishlist';
import { FC } from 'react';
import styles from './ActionBtns.module.scss';

import { MaterialIcon } from '../MaterialIcon';
import clsx from 'clsx';

export const ActionBtns: FC<{ productId: number; className?: string }> = ({
	productId,
	className = styles.none,
}) => {
	const { data: wish, toggleToWishlistMutation } = useGetUserWishlist();

	const { data: basket, addToBasketMutation } = useGetUserBasket();

	const inBasket = basket.find(item => item.product.id == productId);
	const inWish = wish.find(item => item.product.id == productId);

	return (
		<div
			className={clsx(styles.btns, {
				[className]: className,
			})}
		>
			<Button
				className={clsx({
					[styles.inWish]: inWish,
				})}
				onClick={() => toggleToWishlistMutation(productId)}
				variant='outlined'
			>
				<MaterialIcon muiName='FavoriteIcon' />
			</Button>
			<Button
				onClick={() => addToBasketMutation(productId)}
				variant='contained'
			>
				<MaterialIcon muiName={inBasket ? 'BsCheckLg' : 'ShoppingCartIcon'} />
			</Button>
		</div>
	);
};
