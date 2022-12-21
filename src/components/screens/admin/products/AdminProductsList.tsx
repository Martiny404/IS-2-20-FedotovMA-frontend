import { AdminProduct } from '@/components/ui/admin-product/AdminProduct';
import { Heading } from '@/components/ui/heading/Heading';

import { ProductTypes } from '@/types/product.types';

import { FC } from 'react';
import styles from '../statistics/Admin.module.scss';

export const AdminProductsList: FC<{ products: ProductTypes.IProduct[] }> = ({
	products,
}) => {
	if (products.length == 0) {
		return <Heading headingLevel='h1'>Ничего не найдено!</Heading>;
	}
	return (
		<ul className={styles.block}>
			{products.map(item => (
				<AdminProduct
					key={item.id}
					item={{
						rating: item.rating?.toString(),
						c: item.productOrders?.toString(),
						brand_name: item.brand.name,
						category_name: item.category.name,
						description: item.description,
						in_stock: item.inStock.toString(),
						options: item.options,
						price: item.price,
						poster: item.poster,
						product_name: item.name,
						id: item.id,
						created_at: item.createdAt,
					}}
				/>
			))}
		</ul>
	);
};
