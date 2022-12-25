import { axiosClassic, instance } from '@/api/interceptors.api';
import { getOptionApi } from '@/config/api.config';
import { Option } from '@/types/option.types';

export const getOptionValues = async (optionId: number) => {
	const response = await axiosClassic.get(getOptionApi(`${optionId}`));

	return response.data;
};

export const getAllOptions = async () => {
	const response = await axiosClassic.get<Option[]>(getOptionApi(''));
	return response.data;
};

export const getOneOption = async (optionId: number) => {
	const response = await axiosClassic.get<Option>(getOptionApi(`${optionId}`));
	return response.data;
};

export const removeOption = async (optionId: number) => {
	const response = await axiosClassic.delete(
		getOptionApi(`remove/${optionId}`)
	);
	return response.data;
};

export const removeValue = async (valueId: number) => {
	const response = await axiosClassic.delete(
		getOptionApi(`remove-value/${valueId}`)
	);
	return response.data;
};

export interface AddOptionValueDto {
	optionId: number;
	value: string;
}

export const addValue = async (dto: AddOptionValueDto) => {
	const response = await instance.post(
		getOptionApi(`add-values/${dto.optionId}`),
		{
			value: dto.value,
		}
	);
	return response.data;
};

export const createOption = async (name: string) => {
	const response = await instance.post(getOptionApi(''), {
		name,
	});
	return response.data;
};
