import { IBrand } from './brand.types';
import { ICategory } from './category.types';

export enum ProductStatus {
	PREPARING_FOR_SALE = 'PREPARING_FOR_SALE',
	ON_SALE = 'ON_SALE',
	NOT_AVAILABLE_FOR_FALSE = 'NOT_AVAILABLE_FOR_FALSE',
}

export type IProductOptions = Object & Record<string, string>;

export interface Image {
	id: number;
	photo: string;
}

export interface IUpdateProduct {
	name?: string;
	description?: string;
	inStock?: number;
	discount_percentage?: number;
	status?: string;
	poster?: string;
	price?: number;
}

export namespace ProductTypes {
	export interface ISearchProduct {
		id: number;
		createdAt: string;
		updatedAt: string;
		name: string;
		inStock: number;
		views: number;
		description: string;
		status: string;
		hidden: boolean;
		price: number;
		discount_percentage: number;
		poster: string;
		options: IProductOptions;
		category: ICategory;
		brand: IBrand;
	}

	export interface IProduct {
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
		rating: number;
		productOrders?: number;
		images: Image[];
	}

	export interface GetAllProductsResponse {
		count: number;
		products: IProduct[];
	}
}
