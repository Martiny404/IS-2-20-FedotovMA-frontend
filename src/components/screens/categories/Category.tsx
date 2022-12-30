import { AdminProduct } from '@/components/ui/admin-product/AdminProduct';
import { Heading } from '@/components/ui/heading/Heading';
import { ProductCard } from '@/components/ui/product-card/ProductCard';
import { getCatalogUrl } from '@/config/url.config';
import { ICategory } from '@/types/category.types';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Category.module.scss';

export const Category: FC<{ category: ICategory }> = ({ category }) => {
	return (
		<Meta
			title={category.name}
			description={category.description || 'Страница категории'}
		>
			<div className={styles.category}>
				<Heading headingLevel='h1'>{category.name}</Heading>
				<div className={styles.content}>
					{category.description ? (
						<div
							className={styles.text}
							dangerouslySetInnerHTML={{ __html: category.description }}
						></div>
					) : (
						<div className={styles.text}>Описания нет!</div>
					)}
					<Image
						style={{ objectFit: 'contain' }}
						className={clsx({
							[styles.image]:
								!category.description || category.description == '',
						})}
						alt={category.name}
						src={category.categoryImgPath || 'no_image.jpeg'}
						width={280}
						height={280}
					/>
				</div>

				<Heading headingLevel='h2'>Популярные в категории продукты</Heading>

				<ul className={styles.list}>
					{category.products && category.products.length > 0 ? (
						category.products.map(product => (
							<ProductCard
								key={product.id}
								item={{
									brand_id: product.brand.id,
									c: '',
									brand_name: product.brand.name,
									category_id: product.category.id,
									category_name: product.category.name,
									views: product.views,
									created_at: product.createdAt,
									description: product.description,
									discount_percentage: product.discount_percentage,
									id: product.id,
									in_stock: product.inStock.toString(),
									options: product.options,
									poster: product.poster,
									price: product.price,
									product_name: product.name,
									product_status: product.status,
									rating: '',
									updated_at: product.updatedAt,
								}}
							/>
						))
					) : (
						<Heading headingLevel='h3'>Список пуст!</Heading>
					)}
				</ul>

				<Link
					className='my-link'
					href={getCatalogUrl(`categoryId=${category.id}`)}
				>
					Перейти в каталог к покупкам
				</Link>
			</div>
		</Meta>
	);
};
