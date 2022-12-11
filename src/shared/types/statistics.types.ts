export interface IMostOrderedProduct {
	c: string;
	rating: string;
	product_name: string;
	description: string;
	id: number;
	in_stock: string;
	created_at: Date;
	options: Object & Record<string, any>;
	price: number;
	discount_percentage?: number;
	poster: string;
	category_name: string;
	brand_name: string;
}
