import { GET_ORDERS_BY_TIME } from '@/constants/queries';
import { getOrdersByTime } from '@/services/statistics.service';
import { useQuery } from 'react-query';

export const useGetOrdersByTime = (start?: string, end?: string) => {
	const { data, refetch, isFetched } = useQuery(
		[GET_ORDERS_BY_TIME, start, end],
		() => getOrdersByTime(start, end),
		{
			enabled: false,
		}
	);

	return { data, refetch, isFetched };
};
