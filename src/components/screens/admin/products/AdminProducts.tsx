import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { useProducts } from '@/hooks/data/product/useProducts';
import { FC, useState } from 'react';
import Select from 'react-select';
import { AdminNavigation } from '../navigation/AdminNavigation';
import { AdminProductsList } from './AdminProductsList';
import { AdminProductsPagination } from './AdminProductsPagination';
import styles from './AdminProducts.module.scss';
import { IOption } from '@/types/select.types';
import Link from 'next/link';
import { getAdminUrl } from '@/config/url.config';
import clsx from 'clsx';

export const AdminProducts: FC = () => {
	const [categoryId, setCategoryId] = useState<IOption | undefined>(undefined);
	const [brandId, setBrandId] = useState<IOption | undefined>(undefined);
	const [page, setPage] = useState<number>(1);

	const { data, refetch } = useProducts({
		page: page,
		categoryId: categoryId?.value,
		brandId: brandId?.value,
	});

	const pages = [];

	if (data?.count) {
		for (let i = 0; i < Math.ceil(data?.count / 9); i++) {
			pages.push(i + 1);
		}
	}

	const categories = useGetAllCategories();
	const brands = useGetAllBrands();

	const brandsOptions = brands.map(brand => ({
		value: brand.id,
		label: brand.name,
	}));

	const categoriesOptions = categories.map(category => ({
		value: category.id,
		label: category.name,
	}));

	const onCategoryChanged = (option: any) => {
		setCategoryId(option);
	};

	const onBrandChanged = (option: any) => {
		setBrandId(option);
	};

	const changePage = (p: number) => {
		setPage(p);
		refetch();
	};

	return (
		<>
			<AdminNavigation />
			<Link
				className={clsx('my-link', styles.link)}
				href={getAdminUrl('products/create')}
			>
				Создать новый
			</Link>
			<div className={styles.wrapper}>
				<div className={styles.select}>
					<Select
						onChange={onCategoryChanged}
						value={categoryId}
						options={categoriesOptions}
					/>
					<Select
						onChange={onBrandChanged}
						value={brandId}
						options={brandsOptions}
					/>
				</div>

				<AdminProductsList products={data?.products || []} />
				<AdminProductsPagination
					onChange={changePage}
					page={page}
					pages={pages}
				/>
			</div>
		</>
	);
};
