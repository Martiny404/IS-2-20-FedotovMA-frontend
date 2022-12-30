import { Heading } from '@/components/ui/heading/Heading';
import { ProductCard } from '@/components/ui/product-card/ProductCard';
import { getCatalogUrl } from '@/config/url.config';
import { IBrand } from '@/types/brand.types';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../categories/Category.module.scss';
import CategorySlider from './CategorySlider';

export const Brand: FC<{ brand: IBrand }> = ({ brand }) => {
	return (
		<Meta
			title={brand.name}
			description={brand.description || 'Страница бренда'}
		>
			<div className={styles.category}>
				<Heading headingLevel='h1'>{brand.name}</Heading>
				<div className={styles.content}>
					{brand.description ? (
						<div
							className={styles.text}
							dangerouslySetInnerHTML={{ __html: brand.description }}
						></div>
					) : (
						<div className={styles.text}>Описания нет!</div>
					)}
					<Image
						style={{ objectFit: 'contain' }}
						className={clsx({
							[styles.image]: !brand.description || brand.description == '',
						})}
						alt={brand.name}
						src={brand.brandImgPath || 'no_image.jpeg'}
						width={280}
						height={280}
					/>
				</div>

				<Heading headingLevel='h2'>Популярные продукты бренда</Heading>

				<ul className={styles.list}>
					{brand.products && brand.products.length > 0 ? (
						brand.products.map(product => (
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

				<Heading headingLevel='h2'>Категории бренда</Heading>

				<div style={{ marginBottom: 20 }}>
					<CategorySlider categories={brand.categories || []} />
				</div>

				<Link className='my-link' href={getCatalogUrl(`brandId=${brand.id}`)}>
					Перейти в каталог к покупкам
				</Link>
			</div>
		</Meta>
	);
};
