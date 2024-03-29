import { FC, useMemo } from 'react';

import styles from '../Admin.module.scss';
import { useMostOrderedProducts } from '@/hooks/data/statistic/useMostOrderedProducts';
import { AdminProduct } from '@/components/ui/admin-product/AdminProduct';
import { Heading } from '@/components/ui/heading/Heading';

export const TopThreeProducts: FC = () => {
	const { data, isLoading } = useMostOrderedProducts();

	const three = useMemo(() => {
		return data?.slice(0, 3);
	}, [data]);

	if (isLoading) {
		<Heading headingLevel='h2'>Загрузка...</Heading>;
	}

	return (
		<ul className={styles.block}>
			{three?.map(item => (
				<AdminProduct
					key={item.id}
					item={{
						brand: {
							id: item.brand_id,
							name: item.brand_name,
						},
						category: {
							id: item.category_id,
							name: item.category_name,
						},
						createdAt: item.created_at,
						description: item.description,
						id: item.id,
						images: [],
						inStock: +item.in_stock,
						name: item.product_name,
						options: item.options,
						poster: item.poster,
						price: item.price,
						productOrders: +item.c,
						rating: +item.rating,
						status: item.product_status,
						updatedAt: item.updated_at,
						views: item.views,
						discount_percentage: item.discount_percentage,
					}}
				/>
			))}
		</ul>
	);
};
