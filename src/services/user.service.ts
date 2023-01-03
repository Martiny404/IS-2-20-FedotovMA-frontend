import { instance } from '@/api/interceptors.api';
import { getUserApi } from '@/config/api.config';
import { IBasket, IWishlist, UserTypes } from '@/types/user.types';

export const getAllUsers = async () => {
	const response = await instance.get<UserTypes.IUserInfo[]>(getUserApi(''));

	return response.data;
};

export const getUserWishlist = async () => {
	const respnse = await instance.get<IWishlist[]>(getUserApi('wishlist'));

	return respnse.data;
};

export const getUserBasket = async () => {
	const respnse = await instance.get<IBasket[]>(getUserApi('basket'));

	return respnse.data;
};

export const getUserMe = async () => {
	const respnse = await instance.get<UserTypes.Profile>(getUserApi('me'));
	return respnse.data;
};

export const addToBasket = async (productId: number) => {
	const respnse = await instance.post(getUserApi('basket'), {
		productId,
	});
	return respnse.data;
};

export const toggleToWishlist = async (productId: number) => {
	const respnse = await instance.post(getUserApi('wishlist'), {
		productId,
	});
	return respnse.data;
};

export const incrementBasketItem = async (productId: number) => {
	const respnse = await instance.patch(
		getUserApi(`basket/increment/${productId}`)
	);
	return respnse.data;
};

export const decrementBasketItem = async (productId: number) => {
	const respnse = await instance.patch(
		getUserApi(`basket/decrementBasketItem/${productId}`)
	);
	return respnse.data;
};

export interface UpdateUserInfoDto {
	email?: string;

	password?: string;

	code: string;

	avatar?: string;
}

export const addValidationCode = async () => {
	const response = await instance.patch(getUserApi('add-validation-code'));
	return response.data;
};

export const updateUserInfo = async (dto: UpdateUserInfoDto) => {
	const response = await instance.patch(getUserApi('update-user-info'), dto);
	return response.data;
};
