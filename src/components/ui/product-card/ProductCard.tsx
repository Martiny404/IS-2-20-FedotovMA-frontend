import { IMostOrderedProduct } from '@/types/statistics.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { ActionBtns } from '../action-btns/ActionBtns';
import { MaterialIcon } from '../MaterialIcon';
import styles from './ProductCard.module.scss';
import { ProductPrice } from './ProductPrice';

export interface IProductCard {
	className?: string;
	item: IMostOrderedProduct;
}

export const ProductCard: FC<IProductCard> = ({ item, className }) => {
	console.log(item);
	const text: string = useMemo(() => {
		const options = item.options;

		if (!options || Object.keys(options).length == 0)
			return 'Характеристики отсутствуют!';

		const opts = Object.keys(options)
			.map((key, idx) => {
				if (idx <= 2) {
					return `${key}: ${options[key]}`;
				}
			})
			.join('; ');

		return opts;
	}, [item.options]);

	return (
		<li className={clsx(styles.card, className)}>
			<Link href={`/products/${item.id}`} className={styles.img}>
				<Image
					src={item.poster}
					alt={item.product_name}
					width={256}
					height={200}
				/>
			</Link>
			<p className={styles.descr}>
				<strong>{item.product_name}</strong>
				<span> | {text}</span>
			</p>
			<div className={styles.rating}>
				{item.rating ? (
					<>
						<span>Средняя оценка: {parseFloat(item.rating)}</span>
						<MaterialIcon muiName='MdStar' />
					</>
				) : (
					<span>Оценок нет</span>
				)}
			</div>
			<div className={styles.actions}>
				<ProductPrice
					price={item.price}
					discount={item.discount_percentage}
					small
				/>
				<ActionBtns productId={item.id} />
			</div>
		</li>
	);
};
