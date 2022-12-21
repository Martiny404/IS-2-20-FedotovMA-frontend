import Cookies from 'js-cookie';
import { IS_SERVER } from '@/constants/other';
import { IUser } from '@/types/user.types';

export const saveTokensToCookies = (
	accessToken: string,
	refreshToken: string
) => {
	Cookies.set('accessToken', accessToken);
	Cookies.set('clientRefreshToken', refreshToken, {
		expires: 7,
	});
};

export const clearTokensFromStorage = () => {
	Cookies.remove('accessToken');
	Cookies.remove('clientRefreshToken');
};

export const saveToStorage = (data: IUser) => {
	const { accessToken, refreshToken } = data;

	saveTokensToCookies(accessToken, refreshToken);
	localStorage.setItem('user', JSON.stringify(data.user));
};

export const getFromLocalStorage = (key: string) => {
	if (typeof localStorage !== 'undefined' && !IS_SERVER) {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	}
	return null;
};
