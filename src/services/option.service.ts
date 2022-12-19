import { getOptionApi } from '@/config/api.config';
import axios from 'axios';

export const getOptionValues = async (optionId: number) => {
	const response = await axios.get(getOptionApi(`${optionId}`));

	return response.data;
};
