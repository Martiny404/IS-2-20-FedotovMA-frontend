import { Heading } from '@/components/ui/heading/Heading';
import { ProductTypes } from '@/types/product.types';
import { FC } from 'react';
import styles from './Product.module.scss';

import dynamic from 'next/dynamic';
import { ActionBtns } from '@/components/ui/action-btns/ActionBtns';
import Link from 'next/link';
import { getBrandsUrl, getCategoriesUrl } from '@/config/url.config';
import Image from 'next/image';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { ProductPrice } from '@/components/ui/product-card/ProductPrice';

const ProductRating = dynamic(() => import('./ProductRating'), {
	ssr: false,
});

export const ProductDescription: FC<{ product: ProductTypes.IProduct }> = ({
	product,
}) => {
	return (
		<div className={styles.descr}>
			<Heading headingLevel='h1' className={styles.title}>
				{product.name}
			</Heading>
			<ProductRating productId={product.id} rate={product.rating} />
			<ProductPrice
				price={product.price}
				discount={product.discount_percentage}
			/>
			<ActionBtns productId={product.id} />
			<div className={styles.bc}>
				<div className={styles.bcItem}>
					<Link
						className='my-link'
						href={getCategoriesUrl(`${product.category.id}`)}
					>
						Категория: {product.category.name}
					</Link>
					<Image
						src={product.category.categoryImgPath || '/no_image.jpeg'}
						alt={product.category.name}
						width={45}
						height={45}
					/>
				</div>
				<div className={styles.bcItem}>
					<Link className='my-link' href={getBrandsUrl(`${product.brand.id}`)}>
						Производитель: {product.brand.name}
					</Link>
					<Image
						src={product.brand.brandImgPath || '/no_image.jpeg'}
						alt={product.brand.name}
						width={45}
						height={45}
					/>
				</div>
				<div></div>
			</div>
			<div className={styles.views}>
				<span>{product.views}</span>
				<MaterialIcon muiName='AiFillEye' />
			</div>
		</div>
	);
};
