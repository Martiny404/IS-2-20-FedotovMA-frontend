import {
	getBrandsUrl,
	getCategoriesUrl,
	getProductsUrl,
} from '@/config/url.config';
import { ProductTypes } from '@/types/product.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ActionBtns } from '../action-btns/ActionBtns';
import { BasketActions } from '../basket-actions/BasketActions';
import { MaterialIcon } from '../MaterialIcon';
import { ProductPrice } from '@/ui/product-card/ProductPrice';
import styles from './HorizontalProductCard.module.scss';

export const HorizontalProductCard: FC<{
	quantity?: number;
	product: ProductTypes.IProduct;
	isRemoved?: boolean;
	isIncremental?: boolean;
	optionsVisible?: boolean;
}> = ({
	product,
	isRemoved = false,
	isIncremental = false,
	quantity,
	optionsVisible = false,
}) => {
	return (
		<li className={styles.product}>
			<div className={styles.main}>
				<div className={styles.first}>
					<Image
						alt={product.name}
						src={product.poster}
						width={120}
						height={100}
					/>
					<div className={styles.descr}>
						<div className={styles.info}>
							<Link
								className={clsx('my-link', styles.link)}
								href={getProductsUrl(product.id)}
							>
								{product.name}
							</Link>
							<Link
								className={clsx('my-link', styles.link)}
								href={getCategoriesUrl(product.category.id)}
							>
								{product.category.name}
							</Link>
							<Link
								className={clsx('my-link', styles.link)}
								href={getBrandsUrl(product.brand.id)}
							>
								{product.brand.name}
							</Link>
						</div>
						<div className={styles.price}>
							<ProductPrice
								price={product.price}
								discount={product.discount_percentage}
								small
							/>
						</div>
					</div>
				</div>
				<div className={styles.second}>
					{product.discount_percentage > 0 && (
						<div className={styles.discount}>
							-{product.discount_percentage}%
						</div>
					)}
					<div className={styles.rqWrapper}>
						<div className={styles.rating}>
							<strong>Средняя оценка: {product.rating}</strong>
							<MaterialIcon muiName='MdStar' />
						</div>
						{quantity && (
							<span className={styles.quantity}>В корзине: {quantity} шт.</span>
						)}
					</div>
				</div>
				{optionsVisible && (
					<div className={styles.options}>
						{Object.keys(product.options).map(key => (
							<div className={styles.option} key={key}>
								<span>{key}:</span>
								<span>{product.options[key]};</span>
							</div>
						))}
					</div>
				)}
			</div>

			<div className={styles.actions}>
				{isRemoved && (
					<div className={styles.btns}>
						<ActionBtns productId={product.id} />
					</div>
				)}
				{isIncremental && <BasketActions productId={product.id} />}
			</div>
		</li>
	);
};
