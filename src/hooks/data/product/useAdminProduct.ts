import { ICreateProduct } from '@/components/screens/admin/products/create/CreateProduct.interface';
import { CREATE_PRODUCT, GET_ONE_ADMIN_PRODUCT } from '@/constants/queries';
import { createProduct, getOne } from '@/services/product.service';
import { errorHandler } from '@/utils/error-handler';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

export const useProduct = () => {
	const { query, push } = useRouter();

	const productId = String(query.id);

	const { data } = useQuery(
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
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		data,
		createProductMutation,
	};
};
