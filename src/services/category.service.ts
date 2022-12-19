import { getCategoryApi } from '@/config/api.config';
import { ICategory } from '@/types/category.types';
import axios from 'axios';

export const getAllCategories = async () => {
	const response = await axios.get<ICategory[]>(getCategoryApi('all'));
	return response.data;
};

export const getCategoryOptions = async (categoryId: number) => {
	const response = await axios.get(getCategoryApi(`all-options/${categoryId}`));
	return response.data;
};
