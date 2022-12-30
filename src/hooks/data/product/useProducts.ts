import { GET_ALL_PRODUCTS } from '@/constants/queries';
import { getAllProducts, GetAllProductsDto } from '@/services/product.service';
import { errorHandler } from '@/utils/error-handler';
import { useQuery } from 'react-query';

export const useProducts = (dto: GetAllProductsDto) => {
	const { data, refetch } = useQuery(
		[GET_ALL_PRODUCTS, dto],
		() => getAllProducts(dto),
		{
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		data,
		refetch,
	};
};
