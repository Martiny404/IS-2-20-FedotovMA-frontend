import { Heading } from '@/components/ui/heading/Heading';
import { HorizontalProductCard } from '@/components/ui/horizontal-product-card/HorizontalProductCard';
import { useGetUserWishlist } from '@/hooks/data/users/useGetUserWishlist';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';

export const Wishlist: FC = () => {
	const { data } = useGetUserWishlist();

	return (
		<Meta
			title='Избранные товары'
			description='Страница с любимыми или избранными продуктами пользователя'
		>
			<Heading headingLevel='h1'>Избранное</Heading>
			<ul style={{ marginTop: 30 }}>
				{data.map(item => {
					return (
						<HorizontalProductCard
							key={item.id}
							isRemoved={true}
							product={item.product}
						/>
					);
				})}
			</ul>
		</Meta>
	);
};
