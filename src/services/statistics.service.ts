import { getStatisticsApi } from '@/config/api.config';
import { IMostOrderedProduct } from '@/types/statistics.types';
import axios from 'axios';

export const getMostOrdered = async () => {
	const data = await axios.get<IMostOrderedProduct[]>(
		getStatisticsApi('count-op')
	);
	return data.data;
};
