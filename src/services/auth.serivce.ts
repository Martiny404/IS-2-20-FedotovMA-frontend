import { axiosClassic } from '@/api/interceptors.api';

import { getAuthApi } from '@/config/api.config';

import { IUser } from '@/types/user.types';

import { clearTokensFromStorage, saveToStorage } from '@/utils/web-storages';
import { useRouter } from 'next/router';

export const register = async (
	email: string,
	password: string
): Promise<IUser> => {
	const response = await axiosClassic.post<IUser>(getAuthApi('/registration'), {
		email,
		password,
	});
	if (response.data.accessToken) {
		saveToStorage(response.data);
	}
	return response.data;
};

export const login = async (email: string, password: string) => {
	const response = await axiosClassic.post<IUser>(getAuthApi('login'), {
		email: email,
		password: password,
	});
	if (response.data.accessToken) {
		saveToStorage(response.data);
	}
	return response;
};

export const logout = () => {
	axiosClassic.post(
		getAuthApi('logout'),
		{},
		{
			withCredentials: true,
		}
	);
	clearTokensFromStorage();
	localStorage.removeItem('user');
};

export const getNewTokens = async () => {
	const response = await axiosClassic.get<IUser>(getAuthApi('refresh'), {
		withCredentials: true,
	});
	if (response.data.accessToken) {
		saveToStorage(response.data);
	}
	return response;
};
