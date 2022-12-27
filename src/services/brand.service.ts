import { axiosClassic, instance } from '@/api/interceptors.api';
import { getBrandApi } from '@/config/api.config';
import { IBrand } from '@/types/brand.types';

export const getAllBrands = async () => {
	const response = await axiosClassic.get<IBrand[]>(getBrandApi('all'));

	return response.data;
};

export interface CreateBrandDto {
	name: string;
	brandImgPath: string;
}

export const createBrand = async (dto: CreateBrandDto) => {
	const response = await instance.post(getBrandApi(''), dto);
	return response.data;
};

export interface IEditBrand {
	description?: string;
	brandImgPath?: string;
	name?: string;
}

export const getOneBrand = async (brandId: number) => {
	const response = await axiosClassic.get<IBrand>(getBrandApi(`${brandId}`));
	return response.data;
};

export const editBrand = async (brandId: number, dto: IEditBrand) => {
	const response = await instance.patch(getBrandApi(`update/${brandId}`), dto);
	return response.data;
};

export const removeBrand = async (brandId: number) => {
	const response = await instance.delete(getBrandApi(`remove/${brandId}`));
	return response.data;
};

export const getBrandInfo = async (brandId: number) => {
	const response = await axiosClassic.get<IBrand>(
		getBrandApi(`info/${brandId}`)
	);
	return response.data;
};

export const addCategoryToBrand = async (
	brandId: number,
	categoryId: number
) => {
	const response = await axiosClassic.patch(
		getBrandApi(`add-category/${brandId}`),
		{
			categoryId,
		}
	);
	return response.data;
};

export const removeCategoryBrand = async (
	brandId: number,
	categoryId: number
) => {
	const response = await axiosClassic.patch(
		getBrandApi(`remove-category-brand/${brandId}`),
		{
			categoryId,
		}
	);
	return response.data;
};
