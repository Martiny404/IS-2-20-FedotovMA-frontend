import { instance } from '@/api/interceptors.api';
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
	const response = await instance.post(
		getCategoryApi(`update/${categoryId}`),
		dto
	);
	return response.data;
};

export const removeCategory = async (categoryId: number) => {
	const response = await instance.post(getCategoryApi(`remove/${categoryId}`));
	return response.data;
};
