import { HorizontalProductCard } from '@/components/ui/horizontal-product-card/HorizontalProductCard';
import { ProductTypes } from '@/types/product.types';
import { FC } from 'react';
import { Filters } from './Filters';
import styles from './Catalog.module.scss';
import { Meta } from '@/utils/meta/Meta';
import { CatalogPagination } from './CatalogPagination';
import { ICategory } from '@/types/category.types';
import { IBrand } from '@/types/brand.types';
import Image from 'next/image';
import { CatalogSort } from './CatalogSort';

export interface CatalogProps {
	response: ProductTypes.GetAllProductsResponse;
	category: ICategory;
	brands: IBrand[];
}

export const Catalog: FC<CatalogProps> = ({ response, category, brands }) => {
	return (
		<Meta title='Каталог продуктов'>
			<CatalogSort />
			<div className={styles.catalog}>
				<Filters category={category} brands={brands} />
				{response.products.length > 0 ? (
					<ul className={styles.list}>
						{response.products.map(p => (
							<HorizontalProductCard
								optionsVisible
								key={p.id}
								product={p}
								isRemoved
							/>
						))}
					</ul>
				) : (
					<div className={styles.notFound}>
						<Image
							width={280}
							height={280}
							src='/sad-pc.webp'
							alt='Продукты не найдены'
						/>
						<span>К сожалению, по вашему запросу ничего не найдено!</span>
					</div>
				)}
			</div>
			<CatalogPagination count={response.count} />
		</Meta>
	);
};
