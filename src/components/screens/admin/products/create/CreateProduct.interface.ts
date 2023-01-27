export interface ICreateProduct {
	name: string;

	price: number;

	categoryId: number;

	brandId: number;

	poster: string;

	inStock: number;

	discount_percentage?: number;

	description?: string;
}
