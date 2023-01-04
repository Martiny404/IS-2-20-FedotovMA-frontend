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

export const cancleOrder = async (orderId: number) => {
	const response = await instance.patch(getOrderApi(`cancle/${orderId}`));
	return response.data;
};

export interface CreateOrderItem {
	productId: number;
	quantity: number;
}

export interface CreateOrderDto {
	orderProducts: CreateOrderItem[];
}

export const createOrder = async (dto: CreateOrderDto) => {
	if (dto.orderProducts.length == 0) return;
	const response = await instance.post(getOrderApi(''), dto);
	return response.data;
};

export const sendCode = async (orderId: number) => {
	const response = await instance.patch(getOrderApi(`send-code/${orderId}`));
	return response.data;
};

export interface ActivateOrderDto {
	code: string;
	orderId: number;
}

export const activateOrder = async (dto: ActivateOrderDto) => {
	const response = await instance.patch(
		getOrderApi(`activate/${dto.orderId}`),
		{
			code: dto.code,
		}
	);
	return response.data;
};
