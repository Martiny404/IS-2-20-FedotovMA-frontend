import { UserRole } from '@/types/user.types';

export interface IUserState {
	id: number;
	email: string;
	isActivated: boolean;
	role: UserRole;
}

export interface IInitialState {
	user: IUserState | null;
	isLoading: boolean;
}

export interface IUserLoginData {
	email: string;
	password: string;
}
