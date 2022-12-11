import axios from 'axios';
import Cookies from 'js-cookie';

import { clearTokensFromStorage } from '@/utils/web-storages';
import { getNewTokens } from '@/services/auth.serivce';

import { API_URL } from '@/config/api.config';

import { getContentType } from '@/api/helpers.api';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
});

export const instance = axios.create({
	baseURL: API_URL,
	headers: getContentType(),
	withCredentials: true,
});

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken');

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
		return config;
	}
});

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config;
		if (
			error.response.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await getNewTokens();
				return instance.request(originalRequest);
			} catch (e: any) {
				console.log(e.message);
				if (e.response.status == 401) clearTokensFromStorage();
			}
		}
		throw error;
	}
);

export default instance;
