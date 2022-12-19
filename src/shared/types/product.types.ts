import { IBrand } from './brand.types';
import { ICategory } from './category.types';

export enum ProductStatus {
	PREPARING_FOR_SALE = 'PREPARING_FOR_SALE',
	ON_SALE = 'ON_SALE',
	NOT_AVAILABLE_FOR_FALSE = 'NOT_AVAILABLE_FOR_FALSE',
}

export type IProductOptions = Object &
	Record<string, string | number | boolean>;

export namespace ProductTypes {
	export interface IProduct {
		id: number;
		createdAt: string;
		updatedAt: string;
		name: string;
		inStock: number;
		views: number;
		description: string;
		status: ProductStatus;
		hidden: boolean;
		price: number;
		discount_percentage: number;
		poster: string;
		options: IProductOptions;
		category: ICategory;
		brand: IBrand;
	}

	export interface GetAllProductsResponse {
		count: number;
		products: IProduct[];
	}
}
