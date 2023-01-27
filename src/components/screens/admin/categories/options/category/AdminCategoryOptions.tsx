import { getAdminUrl } from '@/config/url.config';
import { useCategoryOptions } from '@/hooks/data/category/useCategoryOptions';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { AdminNavigation } from '../../../navigation/AdminNavigation';
import { AdminCategoryOptionsAdd } from './AdminCategoryOptionsAdd';
import { AdminCategoryOptionsList } from './AdminCategoryOptionsList';

export const AdminCategoryOptions: FC = () => {
	const { category } = useCategoryOptions();

	return (
		<Meta title='Страница характеристик у категории'>
			<Link
				className='my-link'
				href={getAdminUrl(`categories/edit/${category?.id}`)}
			>
				Назад
			</Link>
			<AdminCategoryOptionsList />
			<AdminCategoryOptionsAdd />
		</Meta>
	);
};
