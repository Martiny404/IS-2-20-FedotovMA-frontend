import { Option } from './option.types';
import { ProductTypes } from './product.types';

export interface ICategory {
	id: number;
	name: string;
	description?: string;
	categoryImgPath?: string;
	options?: Option[];
	products?: ProductTypes.IProduct[];
}
