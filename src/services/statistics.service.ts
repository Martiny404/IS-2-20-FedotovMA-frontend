import { getStatisticsApi } from '@/config/api.config';
import { IMostOrderedProduct } from '@/types/statistics.types';
import { OrderByTme } from '@/types/order/order-by-time.types';
import axios from 'axios';
import { instance } from '@/api/interceptors.api';

export const getMostOrdered = async () => {
	const data = await axios.get<IMostOrderedProduct[]>(
		getStatisticsApi('count-op')
	);
	return data.data;
};

export const getOrdersByTime = async (start?: string, end?: string) => {
	let filters = {};

	if (start && end) {
		filters = {
			start,
			end,
		};
	}

	const response = await instance.get<OrderByTme.IOrder[]>(
		getStatisticsApi('by-date-range'),
		{
			params: filters,
		}
	);
	return response.data;
};
