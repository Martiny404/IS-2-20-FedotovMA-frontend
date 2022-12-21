import { getAdminUrl } from '@/config/url.config';
import { parsePrice } from '@/utils/parsePrice';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MaterialIcon } from '../MaterialIcon';
import styles from './AdminProduct.module.scss';

export interface IAdminProduct {
	c?: string;
	rating?: string;
	product_name: string;
	description: string;
	id: number;
	in_stock: string;
	created_at?: string;
	options: Object & Record<string, any>;
	price: number;
	discount_percentage?: number;
	poster: string;
	category_name: string;
	brand_name: string;
}

export const AdminProduct: FC<{ item: IAdminProduct }> = ({ item }) => {
	return (
		<li className={styles.adminProduct}>
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
				{item.c ? <span>Кол-во продаж: {item.c}</span> : null}
				<span>Цена: {parsePrice(item.price)} ₽</span>
				<span>В наличии: {item.in_stock}</span>
				{item.rating ? (
					<div className={styles.rating}>
						<span>Средняя оценка: {parseFloat(item.rating)}</span>
						<MaterialIcon muiName='MdStar' />
					</div>
				) : null}
			</div>
		</li>
	);
};
