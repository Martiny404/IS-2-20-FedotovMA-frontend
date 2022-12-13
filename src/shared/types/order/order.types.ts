import { IBrand } from '../brand.types';
import { ICategory } from '../category.types';
import { ProductStatus } from '../product.types';

export namespace OrderTypes {
	export enum OrderStatus {
		COMPLETED = 'COMPLETED',
		CANCELLED = 'CANCELLED',
		ON_THE_WAY = 'ON_THE_WAY',
		WAITING_FOR_PAYMENT_OR_RECEIPT = 'WAITING FOR PAYMENT OR RECEIPT',
		IN_WAITING = 'IN_WAITING',
	}

	export interface Product {
		id: number;
		name: string;
		inStock: number;
		status: ProductStatus;
		category: ICategory;
		brand: IBrand;
	}

	export interface OrderProduct {
		quantity: number;
		price: number;
		discount: number;
		product: Product;
	}

	export interface User {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		email: string;
		password: string;
		isActivated: boolean;
		activation_link: string;
		updateInfoCode?: any;
	}

	export interface IOrder {
		id: number;
		createdAt: string;
		order_date: string;
		orderStatus: OrderStatus;
		is_activated: boolean;
		total: number;
		orderProducts: OrderProduct[];
		user: User;
	}
}
