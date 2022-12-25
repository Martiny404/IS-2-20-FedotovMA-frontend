import { getAdminUrl } from '@/config/url.config';
import { EDIT_BRAND, GET_ONE_BRAND, REMOVE_BRAND } from '@/constants/queries';
import {
	editBrand,
	getOneBrand,
	IEditBrand,
	removeBrand,
} from '@/services/brand.service';
import { errorHandler } from '@/utils/error-handler';
import { getKeys } from '@/utils/getKeys';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

export const useEditAndRemoveBrand = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter();

	const brandId = String(query.id);

	const { data, refetch } = useQuery(
		GET_ONE_BRAND,
		() => getOneBrand(+brandId),
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

	const { mutateAsync: editBrandMutation } = useMutation(
		EDIT_BRAND,
		(dto: IEditBrand) => editBrand(+brandId, dto),
		{
			onSuccess() {
				notification('Бренд изменен успешно', 'success', 1500);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removeBrandMutation } = useMutation(
		REMOVE_BRAND,
		() => removeBrand(+brandId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Бренд удален успешно', 'success', 1500);
				push(getAdminUrl('brands'));
			},
		}
	);

	return {
		data,
		editBrandMutation,
		removeBrandMutation,
	};
};
