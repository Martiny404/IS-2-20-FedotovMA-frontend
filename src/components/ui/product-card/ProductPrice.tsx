import { parsePrice } from '@/utils/parsePrice';
import clsx from 'clsx';
import { FC } from 'react';

export const ProductPrice: FC<{
	discount?: number;
	price: number;
	small?: boolean;
}> = ({ discount, price, small = false }) => {
	const newPrice = discount ? price - price * (discount / 100) : price;

	return (
		<div
			className={clsx('product-price', {
				'product-price-small': small,
			})}
		>
			<span>{parsePrice(newPrice)} ₽</span>
			<span
				style={!discount ? { display: 'none' } : { display: 'inline-block' }}
			>
				{parsePrice(price)} ₽
			</span>
		</div>
	);
};
