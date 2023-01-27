import { axiosClassic, instance } from '@/api/interceptors.api';
import { getCategoryApi } from '@/config/api.config';
import { ICategory } from '@/types/category.types';

export const getAllCategories = async () => {
	const response = await axiosClassic.get<ICategory[]>(getCategoryApi('all'));
	return response.data;
};

export const getOneCategory = async (categoryId: number) => {
	const response = await axiosClassic.get<ICategory>(
		getCategoryApi(`${categoryId}`)
	);
	return response.data;
};

export const getCategoryInfo = async (categoryId: number) => {
	const response = await axiosClassic.get<ICategory>(
		getCategoryApi(`info/${categoryId}`)
	);
	return response.data;
};

export const addOption = async (categoryId: number, optionId: number) => {
	const response = await instance.post(
		getCategoryApi(`add-options/${categoryId}`),
		{
			optionId,
		}
	);
	return response.data;
};

export const removeCategoryOption = async (
	categoryId: number,
	optionId: number
) => {
	const response = await instance.post(
		getCategoryApi(`remove-option/${categoryId}`),
		{
			optionId,
		}
	);
	return response.data;
};

export const getCategoryOptions = async (categoryId?: number) => {
	if (!categoryId) {
		return null;
	}
	const response = await axiosClassic.get<ICategory>(
		getCategoryApi(`all-options/${categoryId}`)
	);
	return response.data;
};

export interface CreateCategoryDto {
	name: string;
	categoryImgPath: string;
}

export const createCategory = async (dto: CreateCategoryDto) => {
	const response = await instance.post(getCategoryApi(''), dto);
	return response.data;
};

export interface IEditCategory {
	description?: string;
	categoryImgPath?: string;
	name?: string;
}

export const editCategory = async (categoryId: number, dto: IEditCategory) => {
	const response = await instance.patch(
		getCategoryApi(`update/${categoryId}`),
		dto
	);
	return response.data;
};

export const removeCategory = async (categoryId: number) => {
	const response = await instance.post(getCategoryApi(`remove/${categoryId}`));
	return response.data;
};
