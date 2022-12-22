import { ICreateProduct } from '@/components/screens/admin/products/create/CreateProduct.interface';
import {
	ADD_PRODUCT_PHOTO,
	CREATE_PRODUCT,
	DELETE_PRODUCT_PHOTO,
	GET_ONE_ADMIN_PRODUCT,
} from '@/constants/queries';
import {
	addImage,
	createProduct,
	getOne,
	removeImage,
} from '@/services/product.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useProduct = () => {
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
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: createProductMutation } = useMutation(
		CREATE_PRODUCT,
		(dto: ICreateProduct) => createProduct(dto),
		{
			onSuccess() {
				notification('Продукт создан успешно!', 'success', 1300);
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: addPhotoMutation } = useMutation(
		ADD_PRODUCT_PHOTO,
		(path: string) => addImage(+productId, path),
		{
			onSuccess() {
				notification('Фото добавлено успешно!', 'success', 1300);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removePhotoMutation } = useMutation(
		DELETE_PRODUCT_PHOTO,
		(imageId: number) => removeImage(imageId),
		{
			onSuccess() {
				notification('Фото удалено успешно!', 'success', 1300);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		data,
		createProductMutation,
		refetch,
		addPhotoMutation,
		removePhotoMutation,
	};
};
