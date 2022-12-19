import { getProductApi } from '@/config/api.config';
import { ProductTypes } from '@/types/product.types';
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

export interface GetAllProductsDto {
	categoryId?: number;
	page?: number;
	brandId?: number;
}

export const getAllProducts = async (dto: GetAllProductsDto) => {
	const response = await axios.get<ProductTypes.GetAllProductsResponse>(
		getProductApi(''),
		{
			params: {
				categoryId: dto.categoryId,
				brandId: dto.brandId,
				page: dto.page,
			},
		}
	);
	return response.data;
};
