import { getCategoryApi } from '@/config/api.config';
import { ICategory } from '@/types/category.types';
import axios from 'axios';

export const getAllCategories = async () => {
	const response = await axios.get<ICategory[]>(getCategoryApi('all'));
	return response.data;
};
