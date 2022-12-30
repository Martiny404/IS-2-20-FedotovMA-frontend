import { ProductStatus } from './product.types';

export interface IMostOrderedProduct {
	c: string;
	rating: string;
	product_name: string;
	description: string;
	id: number;
	in_stock: string;
	created_at: string;
	updated_at: string;
	options: Object & Record<string, any>;
	price: number;
	product_status: string;
	discount_percentage: number;
	poster: string;
	brand_id: number;
	category_id: number;
	category_name: string;
	brand_name: string;
	views: number;
}
