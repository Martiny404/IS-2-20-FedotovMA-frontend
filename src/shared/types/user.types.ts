import { IBrand } from './brand.types';
import { ICategory } from './category.types';
import { OrderTypes } from './order/order.types';
import { Image, IProductOptions, ProductTypes } from './product.types';

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

	export interface Rating {
		id: number;
		rate: number;
	}

	export interface Product {
		id: number;
		createdAt: string;
		updatedAt: string;
		name: string;
		inStock: number;
		views: number;
		description: string;
		status: string;
		price: number;
		discount_percentage: number;
		poster: string;
		options: IProductOptions;
		category: ICategory;
		brand: IBrand;
		rating: Rating[];
		images: Image[];
	}

	export interface OrderProduct {
		id: number;
		quantity: number;
		product: Product;
	}

	export interface Order {
		id: number;
		createdAt: string;
		updatedAt: string;
		order_date: string;
		orderStatus: OrderTypes.OrderStatus;
		is_activated: boolean;
		activation_code: string;
		total: number;
		orderProducts: OrderProduct[];
	}

	export interface Role {
		id: number;
		roleName: UserRole;
	}

	export interface Profile {
		id: number;
		createdAt: string;
		updatedAt: string;
		email: string;
		password: string;
		avatar?: any;
		isActivated: boolean;
		activation_link: string;
		updateInfoCode?: any;
		orders: Order[];
		role: Role;
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
