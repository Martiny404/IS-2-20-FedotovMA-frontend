import { useOption } from '@/hooks/data/option/useOption';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { AddOptionValue } from './AddOptionValue';
import { AdminOptionsList } from './AdminOptionsList';
import { CreateOption } from './CreateOption';

export const AdminCategoriesOptions: FC = () => {
	return (
		<Meta title='Характеристики категорий'>
			<AdminOptionsList />
			<CreateOption />
			<AddOptionValue />
		</Meta>
	);
};
