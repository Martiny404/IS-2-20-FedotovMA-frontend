import { Heading } from '@/components/ui/heading/Heading';
import { useUpdateCountOpened } from '@/hooks/data/product/useUpdateCountOpened';
import { ProductTypes } from '@/types/product.types';
import { FC } from 'react';
import { ImageSlider } from './ImageSlider';
import styles from './Product.module.scss';
import { ProductDescription } from './ProductDescription';
import { ProductOptions } from './ProductOptions';

export const Product: FC<{ product: ProductTypes.IProduct }> = ({
	product,
}) => {
	useUpdateCountOpened(product.id);

	return (
		<div className={styles.wrapper}>
			<div className={styles.product}>
				<ImageSlider
					images={[
						...product.images,
						{ photo: product.poster, id: product.poster + product.id },
					]}
				/>
				<ProductDescription product={product} />
			</div>
			<div className={styles.optionsWrapper}>
				<div className={styles.textBlock}>
					<Heading headingLevel='h2'>Описание</Heading>
					<p>{product.description}</p>
				</div>
				<ProductOptions options={product.options} />
			</div>
		</div>
	);
};
