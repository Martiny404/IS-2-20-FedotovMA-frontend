import { errorCatcher } from '@/api/helpers.api';
import {
	EVALUTE_PRODUCT,
	GET_PRODUCT_RATE,
	GET_USER_PRODUCT_RATE,
} from '@/constants/queries';
import {
	evaluteProduct,
	getProductAvgRate,
	getUserProductRate,
} from '@/services/product.service';
import { errorHandler } from '@/utils/error-handler';
import { useMutation, useQuery } from 'react-query';

export const useSingleProduct = (productId: number) => {
	const {
		data: userRate,
		refetch: userRateRefetch,
		isError,
	} = useQuery(GET_USER_PRODUCT_RATE, () => getUserProductRate(productId), {
		retry: 1,
	});

	const { data: rate, refetch: productRateRefetch } = useQuery(
		GET_PRODUCT_RATE,
		() => getProductAvgRate(productId)
	);

	const { mutateAsync: evaluteProductMutation } = useMutation(
		EVALUTE_PRODUCT,
		(rate: number) => evaluteProduct(productId, rate),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				userRateRefetch();
				productRateRefetch();
			},
		}
	);

	return {
		userRate,
		evaluteProductMutation,
		rate,
		isError,
	};
};
