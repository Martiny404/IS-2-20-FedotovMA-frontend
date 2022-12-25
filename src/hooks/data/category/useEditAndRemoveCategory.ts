import { getAdminUrl } from '@/config/url.config';
import {
	EDIT_BRAND,
	GET_ONE_BRAND,
	GET_ONE_CATEGORY,
	REMOVE_BRAND,
} from '@/constants/queries';
import {
	editCategory,
	getOneCategory,
	IEditCategory,
	removeCategory,
} from '@/services/category.service';
import { errorHandler } from '@/utils/error-handler';
import { getKeys } from '@/utils/getKeys';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

export const useEditAndRemoveCategory = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter();

	const categoryId = String(query.id);

	const { data, refetch } = useQuery(
		GET_ONE_CATEGORY,
		() => getOneCategory(+categoryId),
		{
			onError(e) {
				errorHandler(e);
				push('/admin');
			},
			onSuccess(d) {
				getKeys(d).forEach(key => {
					setValue(key, d[key]);
				});
			},
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: editCategoryMutation } = useMutation(
		EDIT_BRAND,
		(dto: IEditCategory) => editCategory(+categoryId, dto),
		{
			onSuccess() {
				notification('Категория изменена успешно', 'success', 1500);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removeCategoryMutation } = useMutation(
		REMOVE_BRAND,
		() => removeCategory(+categoryId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Категория удалена успешно', 'success', 1500);
				push(getAdminUrl('brands'));
			},
		}
	);

	return {
		data,
		editCategoryMutation,
		removeCategoryMutation,
	};
};
