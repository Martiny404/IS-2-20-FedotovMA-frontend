import { useGetUserBasket } from '@/hooks/data/users/useGetUserBasket';
import { FC } from 'react';
import { Button } from '../form-elements/Button';
import styles from './BasketActions.module.scss';

export const BasketActions: FC<{ productId: number }> = ({ productId }) => {
	const { decrementBasketItemMutation, incrementBasketItemMutation } =
		useGetUserBasket();

	return (
		<div className={styles.incremental}>
			<Button
				onClick={() => incrementBasketItemMutation(productId)}
				variant='outlined'
			>
				+
			</Button>
			<Button
				onClick={() => decrementBasketItemMutation(productId)}
				variant='outlined'
			>
				-
			</Button>
		</div>
	);
};
