import { instance } from '@/api/interceptors.api';
import { getUserApi } from '@/config/api.config';
import { UserTypes } from '@/types/user.types';

export const getAllUsers = async () => {
	const response = await instance.get<UserTypes.IUserInfo[]>(getUserApi(''));

	return response.data;
};
