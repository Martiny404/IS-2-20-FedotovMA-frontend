import { GET_ORDER_INFO } from '@/constants/queries';
import { getOrderInfo } from '@/services/order.service';
import { errorHandler } from '@/utils/error-handler';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useGetOrderInfo = () => {
	const { push, query } = useRouter();

	const orderId = String(query.id);

	const { isLoading, data } = useQuery(
		[GET_ORDER_INFO, orderId],
		() => getOrderInfo(orderId),
		{
			onError(e) {
				errorHandler(e);
			},
			enabled: !!query.id,
		}
	);

	return {
		isLoading,
		data,
	};
};
