import { instance } from '@/api/interceptors.api';
import { getUserApi } from '@/config/api.config';
import { UserTypes } from '@/types/user.types';

export const getAllUsers = async () => {
	const response = await instance.get<UserTypes.IUserInfo[]>(getUserApi(''));

	return response.data;
};

export const getUserWishlist = async () => {
	const respnse = await instance.get(getUserApi('wishlist'));

	return respnse.data;
};

export const getUserBasket = async () => {
	const respnse = await instance.get(getUserApi('basket'));

	return respnse.data;
};

export const getUserMe = async () => {
	const respnse = await instance.get(getUserApi('me'));
	return respnse.data;
};
