import { ProductTypes } from './product.types';

export interface IUserInfo {
	id: number;
	email: string;
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

export namespace UserTypes {
	export interface IUserInfo {
		id: number;
		email: string;
		isActivated: boolean;
		role: {
			roleName: UserRole;
		};
		createdAt: string;
	}
}

export interface IWishlist {
	id: number;
	product: ProductTypes.IProduct;
}

export interface IBasket {
	id: number;
	quantity: number;
	product: ProductTypes.IProduct;
}
