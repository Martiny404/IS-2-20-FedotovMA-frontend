import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useSingleProduct } from '@/hooks/data/product/useSingleProduct';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './Product.module.scss';

const arr = [1, 2, 3, 4, 5];

const ProductRating: FC<{ rate: number; productId: number }> = ({
	productId,
}) => {
	const { userRate, rate, evaluteProductMutation } =
		useSingleProduct(productId);

	const colored = rate - 1;

	return (
		<div>
			<div className={styles.rating}>
				<strong>Средняя оценка: {rate}</strong>
				<div className={styles.ratingBtns}>
					{arr.map((item, idx) => {
						return (
							<button
								className={clsx(styles.rateBtn, {
									[styles.coloredStar]: colored >= idx,
								})}
								key={`${idx}${Math.random()}`}
								onClick={() => evaluteProductMutation(item)}
							>
								<MaterialIcon muiName='MdStar' />
							</button>
						);
					})}
				</div>
			</div>
			<div className={styles.userRate}>
				<strong>Ваша оценка: {userRate}</strong>
				<MaterialIcon muiName='MdStar' />
			</div>
		</div>
	);
};

export default ProductRating;
