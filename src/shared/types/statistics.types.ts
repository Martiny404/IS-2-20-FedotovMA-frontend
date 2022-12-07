export interface IMostOrderedProduct {
	c: string;
	rating: string;
	name: string;
	description: string;
	id: number;
	created_at: Date;
	options: Object & Record<string, any>;
	price: number;
	discount_percentage?: number;
	poster: string;
	category_name: string;
	brand_name: string;
}
