import { FC } from 'react';
import { AdminProductsOptionsAdd } from './AdminProductsOptionsAdd';
import { AdminProductsOptionsList } from './AdminProductsOptionsList';

export const AdminProductsOptions: FC = () => {
	return (
		<div>
			<AdminProductsOptionsList />
			<div style={{ margin: '40px 0' }} className='hr'></div>
			<AdminProductsOptionsAdd />
		</div>
	);
};
