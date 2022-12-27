import { ICategory } from './category.types';
import { IOffer } from './offer.types';
import { ProductTypes } from './product.types';

export interface IBrand {
	id: number;
	name: string;
	description?: string;
	brandImgPath?: string;
	categories?: ICategory[];
	products?: ProductTypes.IProduct[];
	offers?: IOffer[];
}
