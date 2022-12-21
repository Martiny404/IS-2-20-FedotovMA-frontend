import { IBrand } from '@/types/brand.types';
import { ICategory } from '@/types/category.types';

export function createCategoryAndBrandOptions(items: ICategory[] | IBrand[]) {
	return items.map(item => ({
		label: item.name,
		value: item.id,
	}));
}
