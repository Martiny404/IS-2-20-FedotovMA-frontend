import { ProductStatus } from '@/types/product.types';
import { parseProductStatus } from '../parseProductStatus';

export interface IReturnOrderEnumMapper {
	value: ProductStatus;
	label: string;
}

export const productStatusMapper = () => {
	return (Object.keys(ProductStatus) as Array<keyof typeof ProductStatus>).map(
		key => {
			const label = parseProductStatus(key as ProductStatus)[0];
			return {
				value: key as ProductStatus,
				label,
			};
		}
	);
};
