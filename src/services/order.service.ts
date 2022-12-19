import { instance } from '@/api/interceptors.api';
import { getOrderApi } from '@/config/api.config';
import { getAdminUrl } from '@/config/url.config';
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

export const removeOrder = async (orderId: number) => {
	const response = await instance.delete<boolean>(
		getOrderApi(`remove/${orderId}`)
	);
	return response.data;
};

export const toggleOrderActive = async (orderId: number) => {
	const response = await instance.patch<boolean>(
		getOrderApi(`toggle-active/${orderId}`)
	);
	return response.data;
};

export interface changeOrderStatusDto {
	orderId: number;
	status: OrderTypes.OrderStatus;
}

export const changeOrderStatus = async (dto: changeOrderStatusDto) => {
	const response = await instance.patch<boolean>(
		getOrderApi(`change-status/${dto.orderId}`),
		{
			status: dto.status,
		}
	);
	return response.data;
};
