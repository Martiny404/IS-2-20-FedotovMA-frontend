import {
	CHANGE_ORDER_STATUS,
	GET_ORDER_INFO,
	REMOVE_ORDER,
	TOGGLE_ORDER_ACTIVE,
} from '@/constants/queries';
import {
	changeOrderStatus,
	changeOrderStatusDto,
	getOrderInfo,
	removeOrder,
	toggleOrderActive,
} from '@/services/order.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useOrder = () => {
	const { push, query } = useRouter();

	const orderId = String(query.id);

	const { isLoading, data, refetch } = useQuery(
		[GET_ORDER_INFO, orderId],
		() => getOrderInfo(orderId),
		{
			onError(e) {
				errorHandler(e);
				push('/admin');
			},
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: toggleActiveAsync } = useMutation(
		TOGGLE_ORDER_ACTIVE,
		(orderId: number) => toggleOrderActive(orderId),
		{
			onSuccess() {
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: changeStatusAsync } = useMutation(
		CHANGE_ORDER_STATUS,
		(dto: changeOrderStatusDto) => changeOrderStatus(dto),
		{
			onSuccess() {
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removeOrderAsync } = useMutation(
		REMOVE_ORDER,
		(orderId: number) => removeOrder(orderId),
		{
			onSuccess() {
				notification('Удаление прошло успешно', 'success', 1500);
				push('/admin');
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		isLoading,
		data,
		refetch,
		toggleActiveAsync,
		changeStatusAsync,
		removeOrderAsync,
	};
};
