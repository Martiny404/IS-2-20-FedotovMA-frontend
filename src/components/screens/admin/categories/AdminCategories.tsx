import { BCCard } from '@/components/ui/bc-card/BCCard';
import { getAdminUrl } from '@/config/url.config';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from '../AdminPublic.module.scss';

export const AdminCategories: FC = () => {
	const categories = useGetAllCategories();

	return (
		<Meta
			title='Страница со списком категорий в админ-панеле'
			description='Здесь полный список категорий, представленных в магазине'
		>
			<AdminNavigation />

			<Link href={getAdminUrl('categories/create')} className='my-link'>
				Создать категорию
			</Link>

			<ul className={styles.list}>
				{categories.map(category => (
					<BCCard
						key={category.id}
						item={{ ...category, image: category.categoryImgPath || '' }}
						forAdmin={true}
					/>
				))}
			</ul>
		</Meta>
	);
};
