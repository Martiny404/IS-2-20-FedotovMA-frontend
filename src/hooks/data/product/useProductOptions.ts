import { GET_CATEGORY_OPTIONS } from '@/constants/queries';
import { getCategoryOptions } from '@/services/category.service';
import { useQuery } from 'react-query';

export const useProductOptions = (categoryId?: number) => {
	const { data: category } = useQuery(
		[GET_CATEGORY_OPTIONS, categoryId],
		() => getCategoryOptions(categoryId),
		{
			enabled: !!categoryId,
		}
	);

	return {
		category,
	};
};
