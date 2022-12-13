import { getProductApi } from '@/config/api.config';
import axios from 'axios';

export const getBySearchTerm = async (searchTerm?: string) => {
	const data = await axios.get(getProductApi(''), {
		params: searchTerm ? { searchTerm } : {},
	});
	return data.data;
};

export const getOne = async (id: number) => {
	const response = await axios.get(getProductApi(`info/${id}`));
	return response.data;
};
