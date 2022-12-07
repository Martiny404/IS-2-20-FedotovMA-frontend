import { IMostOrderedProduct } from '@/types/statistics.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { Button } from '../form-elements/Button';
import { MaterialIcon } from '../MaterialIcon';
import styles from './ProductCard.module.scss';
import { ProductCardDescription } from './ProductCardDescription';

export interface IProductCard {
	className?: string;
	item: IMostOrderedProduct;
}

export const ProductCard: FC<IProductCard> = ({ item, className }) => {
	const text: string = useMemo(() => {
		const options = item.options;
		if (!options || Object.keys(options).length == 0)
			return 'Характеристики отсутствуют!';
		const arr: string[] = [];
		for (const key in options) {
			arr.push(`${key}: ${options[key]}`);
		}
		return arr.join('; ');
	}, [item.options]);

	const slicedText = text.slice(0, 31);

	return (
		<li className={clsx(styles.card, className)}>
			<Link href='/' className={styles.img}>
				<Image src={item.poster} alt={item.name} fill />
			</Link>
			<ProductCardDescription
				fullText={text}
				name={item.name}
				shortText={slicedText}
			/>
			<div className={styles.rating}>
				<span>Средняя оценка: {parseFloat(item.rating)}</span>
				<MaterialIcon muiName='MdStar' />
			</div>
			<div className={styles.actions}>
				<div className={styles.price}>
					{new Intl.NumberFormat('ru-RU').format(item.price)} ₽
				</div>
				<div className={styles.btns}>
					<Button variant='outlined'>
						<MaterialIcon muiName='FavoriteIcon' />
					</Button>
					<Button variant='contained'>
						<MaterialIcon muiName='ShoppingCartIcon' />
					</Button>
				</div>
			</div>
		</li>
	);
};
