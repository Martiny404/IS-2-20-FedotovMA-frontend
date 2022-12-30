import {
	ADD_TO_BASKET,
	DECREMENT_BASKET,
	GET_USER_BASKET,
	INCREMENT_BASKET,
} from '@/constants/queries';
import {
	addToBasket,
	decrementBasketItem,
	getUserBasket,
	incrementBasketItem,
} from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
import { useMutation, useQuery } from 'react-query';

export const useGetUserBasket = () => {
	const { data, refetch } = useQuery(GET_USER_BASKET, () => getUserBasket());

	const { mutateAsync: addToBasketMutation } = useMutation(
		ADD_TO_BASKET,
		(productId: number) => addToBasket(productId),
		{
			onSuccess() {
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: incrementBasketItemMutation } = useMutation(
		INCREMENT_BASKET,
		(productId: number) => incrementBasketItem(productId),
		{
			onSuccess() {
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: decrementBasketItemMutation } = useMutation(
		DECREMENT_BASKET,
		(productId: number) => decrementBasketItem(productId),
		{
			onSuccess() {
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		data: data || [],
		addToBasketMutation,
		decrementBasketItemMutation,
		incrementBasketItemMutation,
	};
};
