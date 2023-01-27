import { FC } from 'react';
import { parseProductStatus } from '@/utils/parseProductStatus';
import { OrderTypes } from '@/types/order/order.types';
import { parsePrice } from '@/utils/parsePrice';
import styles from '../AdminOrder.module.scss';
import Link from 'next/link';
import { getAdminUrl } from '@/config/url.config';
import clsx from 'clsx';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Image from 'next/image';

export const AdminOrderProduct: FC<{
	orderProduct: OrderTypes.OrderProduct;
}> = ({ orderProduct }) => {
	const [productStatus, productStatusColor] = parseProductStatus(
		orderProduct.product.status
	);

	return (
		<li className={styles.product} key={orderProduct.product.id}>
			<span>Скидка: {orderProduct.product.discount_percentage || 0}%</span>
			<span>Цена: {parsePrice(orderProduct.product.price)} ₽</span>
			<span>Кол-во: {orderProduct.quantity} шт</span>
			<Link
				className={clsx('my-link', styles.link)}
				href={getAdminUrl(`brands/edit/${orderProduct.product.brand.id}`)}
			>
				Бренд: {orderProduct.product.brand.name}
			</Link>
			<Link
				className={clsx('my-link', styles.link)}
				href={getAdminUrl(
					`categories/edit/${orderProduct.product.category.id}`
				)}
			>
				Категория: {orderProduct.product.category.name}
			</Link>
			<span>Название: {orderProduct.product.name}</span>
			<span>В наличии: {orderProduct.product.inStock} шт</span>
			<span className={productStatusColor}>Статус: {productStatus}</span>
			<Link
				className='my-icon'
				href={getAdminUrl(`products/edit/${orderProduct.product.id}`)}
			>
				<MaterialIcon muiName='GrRedo' />
			</Link>
			<Image
				src={orderProduct.product.poster}
				alt={orderProduct.product.name}
				width={180}
				height={150}
			/>
		</li>
	);
};
