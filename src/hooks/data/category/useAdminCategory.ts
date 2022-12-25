import {
	ADD_OPTION_CATEGORY,
	GET_CATEGORY_OPTIONS,
	REMOVE_OPTION_CATEGORY,
} from '@/constants/queries';
import {
	addOption,
	getCategoryOptions,
	removeCategoryOption,
} from '@/services/category.service';
import { errorHandler } from '@/utils/error-handler';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useCategory = () => {
	const { query, push } = useRouter();

	const categoryId = String(query.id);

	const { data: category, refetch } = useQuery(
		GET_CATEGORY_OPTIONS,
		() => getCategoryOptions(+categoryId),
		{
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: addOptionMutation } = useMutation(
		ADD_OPTION_CATEGORY,
		(optionId: number) => addOption(+categoryId, optionId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
			},
		}
	);

	const { mutateAsync: removeOptionMutation } = useMutation(
		REMOVE_OPTION_CATEGORY,
		(optionId: number) => removeCategoryOption(+categoryId, optionId),
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
		category,
		refetch,
		addOptionMutation,
		removeOptionMutation,
	};
};
