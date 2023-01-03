import { axiosClassic, instance } from '@/api/interceptors.api';
import { ICreateProduct } from '@/components/screens/admin/products/create/CreateProduct.interface';
import { getProductApi } from '@/config/api.config';
import { ProductTypes } from '@/types/product.types';

export const getBySearchTerm = async (searchTerm: string) => {
	const data = await axiosClassic.get<ProductTypes.ISearchProduct[]>(
		getProductApi('search'),
		{
			params: {
				searchTerm,
			},
		}
	);
	return data.data;
};

export const getOne = async (id: string) => {
	const response = await axiosClassic.get<ProductTypes.IProduct>(
		getProductApi(`info/${id}`)
	);
	return response.data;
};

export interface GetAllProductsDto {
	categoryId?: number;

	brandId?: number;

	discount?: boolean;

	sort?: string;

	type?: string;
	page?: number;

	filters?: string;
}

export const getAllProducts = async (dto: GetAllProductsDto) => {
	const response = await axiosClassic.get<ProductTypes.GetAllProductsResponse>(
		getProductApi(''),
		{
			params: {
				categoryId: dto.categoryId,
				brandId: dto.brandId,
				page: dto.page,
				discount: dto.discount,
				sort: dto.sort,
				type: dto.type,
				filters: dto.filters,
			},
		}
	);
	return response.data;
};

export const getProducts = async () => {
	const response = await axiosClassic.get<ProductTypes.IProduct[]>(
		getProductApi('all')
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

export interface addProductOptionDto {
	optionId: number;
	optionValueId: number;
}

export const addProductOption = async (
	productId: number,
	dto: addProductOptionDto
) => {
	const response = await instance.patch(
		getProductApi(`add-option/${productId}`),
		dto
	);
	return response.data;
};

export const removeProductOption = async (productId: number, key: string) => {
	const response = await instance.patch(
		getProductApi(`delete-options/${productId}`),
		{
			key,
		}
	);
	return response.data;
};
export const getUserProductRate = async (productId: number) => {
	const response = await instance.get(
		getProductApi(`user-product-rate/${productId}`)
	);
	return response.data;
};

export const getProductAvgRate = async (productId: number) => {
	const response = await axiosClassic.get(
		getProductApi(`rate-product/${productId}`)
	);
	return response.data;
};

export const evaluteProduct = async (productId: number, rate: number) => {
	const response = await instance.post(
		getProductApi(`evalute-product/${productId}`),
		{
			rate,
		}
	);
	return response.data;
};

export const updateCountOpened = async (productId: number) => {
	const response = await axiosClassic.post(getProductApi(`views/${productId}`));
	return response.data;
};
