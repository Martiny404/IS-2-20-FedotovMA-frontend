import { GET_CATALOG } from '@/constants/queries';
import { getAllProducts } from '@/services/product.service';
import { useQuery } from 'react-query';

export const useCatalog = () => {
	const { data, refetch } = useQuery([GET_CATALOG], () => getAllProducts({}));

	return {
		data,
		refetch,
	};
};
