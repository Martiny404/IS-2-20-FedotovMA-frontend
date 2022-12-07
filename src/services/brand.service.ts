import { getBrandApi } from '@/config/api.config';
import { IBrand } from '@/types/brand.types';
import axios from 'axios';

export const getAllBrands = async () => {
	const response = await axios.get<IBrand[]>(getBrandApi('all'));

	return response.data;
};
