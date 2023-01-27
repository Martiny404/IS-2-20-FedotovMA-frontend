import { ProductStatus } from '@/types/product.types';

export function parseProductStatus(status: ProductStatus) {
	switch (status) {
		case ProductStatus.NOT_AVAILABLE_FOR_FALSE:
			return ['Отсутствует в продаже', 'red'];
		case ProductStatus.ON_SALE:
			return ['В продаже', 'green'];
		case ProductStatus.PREPARING_FOR_SALE:
			return ['На этапе подготовки', 'yellow'];
	}
}
