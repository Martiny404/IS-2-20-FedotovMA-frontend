import { MaterialIcon } from '@/components/ui/MaterialIcon';
import {
	getCatalogUrl,
	getCategoriesUrl,
	getProductsUrl,
} from '@/config/url.config';
import { ProductTypes } from '@/types/product.types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../Search.module.scss';

export const SearchList: FC<{
	closeList: () => void;
	products: ProductTypes.ISearchProduct[];
}> = ({ closeList, products }) => {
	return (
		<ul className={styles.list}>
			<div className={styles.listTitle}>
				<span>По запросу найдено:</span>
				<button onClick={closeList}>
					<MaterialIcon muiName='MdClose' />
				</button>
			</div>
			<div style={{ marginBottom: 10 }} className='hr'></div>
			{products.length > 0 ? (
				products.map(product => (
					<li key={product.id} className={styles.listItem}>
						<Image
							className={styles.img}
							src={product.poster}
							alt={product.name}
							width={60}
							height={60}
						/>
						<div className={styles.links}>
							<Link
								className={clsx('my-link')}
								href={getProductsUrl(`${product.id}`)}
							>
								Перейти к {product.name}
							</Link>
							<Link
								className={clsx('my-link')}
								href={getCatalogUrl(`categoryId=${product.category.id}`)}
							>
								Перейти к {product.category.name}
							</Link>
						</div>
					</li>
				))
			) : (
				<div className={styles.notFound}>
					<strong>Ничего не найдено!</strong>
					<MaterialIcon muiName='CgSmileSad' />
				</div>
			)}
		</ul>
	);
};
