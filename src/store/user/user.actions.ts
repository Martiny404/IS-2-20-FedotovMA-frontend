import { createAsyncThunk } from '@reduxjs/toolkit';

import {
	register as authRegister,
	login as authLogin,
	logout as authLogout,
	getNewTokens as refresh,
} from '@/services/auth.serivce';

import { errorHandler } from '@/utils/error-handler';

import { IUserLoginData } from './user.interface';
import { notification } from '@/utils/notification';
import { IUser } from '@/types/user.types';
import { AxiosError } from 'axios';

export const register = createAsyncThunk<IUser, IUserLoginData>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authRegister(email, password);
			notification('Регистрация прошла успешно!', 'success', 2000);
			return response;
		} catch (e) {
			errorHandler(e);
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const login = createAsyncThunk<IUser, IUserLoginData>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await authLogin(email, password);
			notification('Вход в систему прошел успешно!', 'success', 2000);
			return response.data;
		} catch (e) {
			errorHandler(e);
			return thunkApi.rejectWithValue(e);
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	authLogout();
});

export const checkAuth = createAsyncThunk<IUser>(
	'auth/check-auth',

	async (_, thunkApi) => {
		try {
			const response = await refresh();
			return response.data;
		} catch (e) {
			if (e instanceof AxiosError) {
				if (e.response?.status == 401) {
					notification(
						'Вас выкинуло из системы, время сессии подошло к концу!',
						'error',
						2000
					);

					thunkApi.dispatch(logout());
				}
			}
			errorHandler(e);
			return thunkApi.rejectWithValue(e);
		}
	}
);
