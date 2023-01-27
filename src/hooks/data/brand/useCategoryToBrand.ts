import {
	ADD_CATEGORY_BRAND,
	GET_BRAND_INFO,
	REMOVE_CATEGORY_BRAND,
} from '@/constants/queries';
import {
	addCategoryToBrand,
	getBrandInfo,
	removeCategoryBrand,
} from '@/services/brand.service';
import { errorHandler } from '@/utils/error-handler';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useCategoryToBrand = () => {
	const { query, push } = useRouter();

	const brandId = String(query.id);

	const { data: brand, refetch } = useQuery(
		GET_BRAND_INFO,
		() => getBrandInfo(+brandId),
		{
			onError(e) {
				errorHandler(e);
			},
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: addCategoryToBrandMutation } = useMutation(
		ADD_CATEGORY_BRAND,
		(categoryId: number) => addCategoryToBrand(+brandId, categoryId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
			},
		}
	);

	const { mutateAsync: removeCategoryBrandMutation } = useMutation(
		REMOVE_CATEGORY_BRAND,
		(categoryId: number) => removeCategoryBrand(+brandId, categoryId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
			},
		}
	);

	return {
		addCategoryToBrandMutation,
		brand,
		removeCategoryBrandMutation,
	};
};
