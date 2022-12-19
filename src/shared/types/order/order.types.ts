import { IBrand } from '../brand.types';
import { ICategory } from '../category.types';
import { ProductStatus } from '../product.types';
import { UserTypes } from '../user.types';
export namespace OrderTypes {
	export enum OrderStatus {
		COMPLETED = 'COMPLETED',
		CANCELLED = 'CANCELLED',
		ON_THE_WAY = 'ON_THE_WAY',
		WAITING_FOR_PAYMENT_OR_RECEIPT = 'WAITING_FOR_PAYMENT_OR_RECEIPT',
		IN_WAITING = 'IN_WAITING',
	}

	export interface Product {
		id: number;
		name: string;
		inStock: number;
		status: ProductStatus;
		price: number;
		discount_percentage?: any;
		poster: string;
		category: ICategory;
		brand: IBrand;
	}

	export interface OrderProduct {
		quantity: number;
		product: Product;
	}

	export interface IOrder {
		id: number;
		createdAt: string;
		order_date: string;
		orderStatus: OrderStatus;
		is_activated: boolean;
		total: number;
		orderProducts: OrderProduct[];
		user: UserTypes.IUserInfo;
	}
}
