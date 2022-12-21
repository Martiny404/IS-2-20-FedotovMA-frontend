import { useProduct } from '@/hooks/data/product/useAdminProduct';
import { FC } from 'react';

export const AdminEditPhotos: FC = () => {
	const { data: product } = useProduct();
	return <div>{product?.id}</div>;
};
