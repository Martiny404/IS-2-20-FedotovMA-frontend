import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { getAdminUrl } from '@/config/url.config';
import { IMostOrderedProduct } from '@/types/statistics.types';
import { parsePrice } from '@/utils/parsePrice';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../Admin.module.scss';

export const TopProduct: FC<{ item: IMostOrderedProduct }> = ({ item }) => {
	return (
		<li className={styles.product}>
			<Link
				href={getAdminUrl(`products/edit/${item.id}`)}
				className={styles.img}
			>
				<Image
					draggable={false}
					fill
					alt={item.product_name}
					src={item.poster}
				/>
			</Link>
			<div className={styles.info}>
				<span>Название: {item.product_name}</span>
				<span>Бренд: {item.brand_name}</span>
				<span>Категория: {item.category_name}</span>
				<span>Кол-во продаж: {item.c}</span>
				<span>Цена: {parsePrice(item.price)} ₽</span>
				<span>В наличии: {item.in_stock}</span>
				<div className={styles.rating}>
					<span>Средняя оценка: {parseFloat(item.rating)}</span>
					<MaterialIcon muiName='MdStar' />
				</div>
			</div>
		</li>
	);
};
