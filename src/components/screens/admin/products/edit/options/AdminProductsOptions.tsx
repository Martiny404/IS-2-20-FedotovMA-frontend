import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { AdminProductsOptionsAdd } from './AdminProductsOptionsAdd';
import { AdminProductsOptionsList } from './AdminProductsOptionsList';

export const AdminProductsOptions: FC = () => {
	return (
		<div>
			<Meta title='Характеристики продукта'>
				<AdminProductsOptionsList />
				<div style={{ margin: '40px 0' }} className='hr'></div>
				<AdminProductsOptionsAdd />
			</Meta>
		</div>
	);
};
