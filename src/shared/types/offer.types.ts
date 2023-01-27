import { IBrand } from './brand.types';
import { ICategory } from './category.types';

export interface IOffer {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	endDate: string;
	description?: string;
	photo: string;
	brand: IBrand;
	category: ICategory;
}
