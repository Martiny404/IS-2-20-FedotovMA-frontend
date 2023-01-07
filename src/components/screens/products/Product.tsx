import { Heading } from '@/components/ui/heading/Heading';
import { useUpdateCountOpened } from '@/hooks/data/product/useUpdateCountOpened';
import { ProductTypes } from '@/types/product.types';
import { Meta } from '@/utils/meta/Meta';
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
		<Meta title={product.name} description={product.description}>
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
						<div
							dangerouslySetInnerHTML={{
								__html: product.description,
							}}
						></div>
					</div>
					{Object.keys(product.options).length > 0 ? (
						<ProductOptions options={product.options} />
					) : (
						<Heading headingLevel='h3'>Характеристик нет!</Heading>
					)}
				</div>
			</div>
		</Meta>
	);
};
