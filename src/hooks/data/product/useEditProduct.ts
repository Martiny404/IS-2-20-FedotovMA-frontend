import { getAdminUrl } from '@/config/url.config';
import {
	DELETE_PRODUCT,
	EDIT_PRODUCT,
	GET_ONE_ADMIN_PRODUCT,
} from '@/constants/queries';
import { getOne, editProduct, removeProduct } from '@/services/product.service';
import { IUpdateProduct } from '@/types/product.types';
import { errorHandler } from '@/utils/error-handler';
import { getKeys } from '@/utils/getKeys';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

export const useEditProduct = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter();

	const productId = String(query.id);

	const { data, refetch } = useQuery(
		[GET_ONE_ADMIN_PRODUCT, productId],
		() => getOne(productId),
		{
			onError(e) {
				errorHandler(e);
				push('/admin');
			},
			select(d) {
				return {
					id: d.id,
					name: d.name,
					description: d.description,
					inStock: d.inStock,
					discount_percentage: d.discount_percentage,
					options: d.options,
					status: d.status,
					poster: d.poster,
					price: d.price,
					images: d.images,
				};
			},
			onSuccess(d) {
				getKeys(d).forEach(key => {
					if (key !== 'images' && key !== 'options' && key != 'id') {
						setValue(key, d[key]);
					}
				});
			},
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: editProductMutation } = useMutation(
		EDIT_PRODUCT,
		(dto: IUpdateProduct) => editProduct(+productId, dto),
		{
			onSuccess() {
				notification('Продукт изменен успешно', 'success', 1500);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removeProductMutation } = useMutation(
		DELETE_PRODUCT,
		() => removeProduct(+productId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Продукт удален успешно', 'success', 1500);
				push(getAdminUrl('products'));
			},
		}
	);

	return {
		data,
		editProductMutation,
		removeProductMutation,
	};
};
