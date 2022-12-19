import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl, getProductsUrl } from '@/config/url.config';
import { ProductTypes } from '@/types/product.types';
import { parsePrice } from '@/utils/parsePrice';
import Image from 'next/image';
import Link from 'next/link';
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
				<li key={item.id}>
					<Link
						href={getAdminUrl(`products/edit/${item.id}`)}
						className={styles.img}
					>
						<Image draggable={false} fill alt={item.name} src={item.poster} />
					</Link>
					<div className={styles.info}>
						<span>Название: {item.name}</span>
						<span>Бренд: {item.brand.name}</span>
						<span>Категория: {item.category.name}</span>
						<span>Цена: {parsePrice(item.price)} ₽</span>
						<span>В наличии: {item.inStock}</span>
					</div>
				</li>
			))}
		</ul>
	);
};
