import { instance } from '@/api/interceptors.api';
import { getOrderApi } from '@/config/api.config';
import { OrderByTme } from '@/types/order/order-by-time.types';
import { OrderTypes } from '@/types/order/order.types';

export const getAllOrders = async () => {
	const response = await instance.get<OrderByTme.IOrder[]>(getOrderApi('all'));
	return response.data;
};

export const getOrderInfo = async (id: string) => {
	const response = await instance.get<OrderTypes.IOrder>(
		getOrderApi(`info/${id}`)
	);
	return response.data;
};
