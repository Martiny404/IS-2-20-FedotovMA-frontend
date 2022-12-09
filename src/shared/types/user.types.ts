export interface IUserInfo {
	email: string;
	id: number;
	isActivated: boolean;
	role: UserRole;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export type UserRole = 'admin' | 'user';

export interface IUser extends ITokens {
	user: IUserInfo;
}
