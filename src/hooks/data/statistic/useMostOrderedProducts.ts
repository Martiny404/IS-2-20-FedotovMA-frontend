import { useQuery } from 'react-query';
import { GET_MOST_ORDERED_PRODUCTS } from '@/constants/queries';
import { getMostOrdered } from '@/services/statistics.service';

export const useMostOrderedProducts = () => {
	const { data, isLoading } = useQuery(
		GET_MOST_ORDERED_PRODUCTS,
		getMostOrdered
	);
	return {
		data,
		isLoading,
	};
};
