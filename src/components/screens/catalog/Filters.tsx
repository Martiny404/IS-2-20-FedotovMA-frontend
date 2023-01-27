import { useFilters } from '@/hooks/useFilters';
import { useOtherFilters } from '@/hooks/useOtherFilters';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { CatalogProps } from './Catalog';
import styles from './Catalog.module.scss';
import { Filter } from './Filter';
import { OtherFilter } from './OtherFilter';

export interface IFilter {
	key: string;
	value: string[];
}

export const Filters: FC<Pick<CatalogProps, 'brands' | 'category'>> = ({
	category,
	brands,
}) => {
	const { checked, filters, onChange } = useFilters();

	const {
		checked: brandIdCheked,
		onChange: onBrandIdChange,
		filter: brandId,
	} = useOtherFilters('brandId');

	const {
		checked: discountCheked,
		onChange: ondiscountdChange,
		filter: discount,
	} = useOtherFilters('discount');

	const options = category.options || [];

	const brandsItems = brands.map(brand => ({
		name: brand.name,
		value: brand.id,
	}));

	return (
		<div className={styles.filters}>
			<Link
				className={clsx('my-link', styles.link)}
				href={{
					pathname: '/catalog',
					query: {
						id: category?.id,
					},
				}}
			>
				Сбросить
			</Link>
			<div className={styles.filtersWrapper}>
				<>
					<OtherFilter
						checked={brandIdCheked}
						items={brandsItems}
						onChange={onBrandIdChange}
						title='Производитель'
					/>
					<OtherFilter
						checked={discountCheked}
						items={[
							{ name: 'Да', value: true },
							{ name: 'Все', value: false },
						]}
						onChange={ondiscountdChange}
						title='Скидка'
					/>

					{options.map(option => (
						<Filter
							checked={checked}
							onChange={onChange}
							option={option}
							key={option.id}
						/>
					))}
				</>
			</div>

			<Link
				className={clsx('my-link', styles.link)}
				href={{
					pathname: '/catalog',
					query: {
						id: category?.id,
						filters: JSON.stringify(filters),
						brandId: brandId ? brandId : null,
						discount: discount ? discount : null,
					},
				}}
			>
				Применить
			</Link>
		</div>
	);
};
