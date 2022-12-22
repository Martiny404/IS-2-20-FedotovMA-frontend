import { instance } from '@/api/interceptors.api';
import { ICreateProduct } from '@/components/screens/admin/products/create/CreateProduct.interface';
import { getProductApi } from '@/config/api.config';
import { ProductTypes } from '@/types/product.types';
import axios from 'axios';

export const getBySearchTerm = async (searchTerm?: string) => {
	const data = await axios.get(getProductApi(''), {
		params: searchTerm ? { searchTerm } : {},
	});
	return data.data;
};

export const getOne = async (id: string) => {
	const response = await axios.get<ProductTypes.IProduct>(
		getProductApi(`info/${id}`)
	);
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

export const createProduct = async (dto: ICreateProduct) => {
	const response = await instance.post(getProductApi(''), dto);
	return response.data;
};

export const editProduct = async (id: number, dto: any) => {
	const response = await instance.patch(getProductApi(`update/${id}`), dto);
	return response.data;
};

export const addImage = async (productId: number, path: string) => {
	const response = await instance.patch(getProductApi(`add-img/${productId}`), {
		path,
	});
	return response.data;
};

export const removeProduct = async (productId: number) => {
	const response = await instance.delete(getProductApi(`remove/${productId}`));
	return response.data;
};

export const removeImage = async (imageId: number) => {
	const response = await instance.delete(
		getProductApi(`remove-img/${imageId}`)
	);
	return response.data;
};
