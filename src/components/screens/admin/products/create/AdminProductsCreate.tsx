import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';

import { FC } from 'react';

export const AdminProductsCreate: FC = () => {
	const {} = useGetAllBrands();
	const {} = useGetAllCategories();

	return <form></form>;
};
