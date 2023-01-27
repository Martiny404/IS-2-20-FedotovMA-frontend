import { OrderTypes } from './order.types';

export namespace OrderByTme {
	export interface User {
		id: number;
		email: string;
	}

	export interface Brand {
		name: string;
	}

	export interface Category {
		name: string;
	}

	export interface Product {
		name: string;
		inStock: number;
		brand: Brand;
		category: Category;
	}

	export interface IOrderProduct {
		quantity: number;
		price: number;
		discount: number;
		product: Product;
	}

	export interface IOrder {
		id: number;
		createdAt: string;
		orderStatus: OrderTypes.OrderStatus;
		is_activated: boolean;
		total?: number;
		user: User;
		orderProducts: IOrderProduct[];
	}
}
