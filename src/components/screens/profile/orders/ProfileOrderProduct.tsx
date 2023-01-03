import { HorizontalProductCard } from '@/components/ui/horizontal-product-card/HorizontalProductCard';
import { UserTypes } from '@/types/user.types';
import { FC } from 'react';

export const ProfileOrderProduct: FC<{
	orderProduct: UserTypes.OrderProduct;
}> = ({ orderProduct }) => {
	const total = orderProduct.product.rating.reduce(
		(acc, v) => (acc += v.rate),
		0
	);

	const rating = total ? total / orderProduct.product.rating.length : 0;

	console.log({
		...orderProduct.product,
		rating,
	});

	return (
		<li>
			<span>Количество: {orderProduct.quantity}</span>
			<div>
				<HorizontalProductCard
					product={{
						...orderProduct.product,
						rating,
					}}
				/>
			</div>
		</li>
	);
};
