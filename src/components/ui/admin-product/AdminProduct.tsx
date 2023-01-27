import { getAdminUrl, getBrandsUrl } from '@/config/url.config';
import { ProductStatus, ProductTypes } from '@/types/product.types';
import { parsePrice } from '@/utils/parsePrice';
import { parseProductStatus } from '@/utils/parseProductStatus';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { MaterialIcon } from '../MaterialIcon';
import styles from './AdminProduct.module.scss';

export const AdminProduct: FC<{ item: ProductTypes.IProduct }> = ({ item }) => {
	const [status, color] = parseProductStatus(item.status as ProductStatus);

	return (
		<li className={styles.adminProduct}>
			<Link
				href={getAdminUrl(`products/edit/${item.id}`)}
				className={styles.img}
			>
				<Image
					draggable={false}
					width={250}
					height={250}
					alt={item.name}
					src={item.poster}
				/>
			</Link>
			<div className={styles.info}>
				<span>Название: {item.name}</span>
				<div className={styles.links}>
					<Link href={getBrandsUrl(item.brand.id)} className='my-link'>
						Бренд: {item.brand.name}
					</Link>
					<Link href={getBrandsUrl(item.category.id)} className='my-link'>
						Категория: {item.category.name}
					</Link>
				</div>
				{typeof item.productOrders !== 'undefined' && (
					<span>Кол-во продаж: {item.productOrders}</span>
				)}
				<span>Цена: {parsePrice(item.price)} ₽</span>
				<span>В наличии: {item.inStock}</span>
				<span className={color}>{status}</span>

				<div className={styles.rating}>
					{item.rating == 0 ? (
						<span>Оценок нет!</span>
					) : (
						<>
							<span>Средняя оценка: {item.rating}</span>
							<MaterialIcon muiName='MdStar' />
						</>
					)}
				</div>
			</div>
		</li>
	);
};
