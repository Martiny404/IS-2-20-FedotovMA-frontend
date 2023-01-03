import { errorStatus } from '@/api/helpers.api';
import {
	ADD_TO_BASKET,
	CREATE_ORDER,
	DECREMENT_BASKET,
	GET_USER_BASKET,
	INCREMENT_BASKET,
} from '@/constants/queries';
import { createOrder, CreateOrderDto } from '@/services/order.service';
import {
	addToBasket,
	decrementBasketItem,
	getUserBasket,
	incrementBasketItem,
} from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
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
				const status = errorStatus(e);
				if (status == 401) {
					notification(
						'Выполните вход в систему или зарегистрируйтесь!',
						'error',
						1800
					);
				} else {
					errorHandler(e);
				}
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
			retry: 1,
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

	const { mutateAsync: createOrderMutation } = useMutation(
		CREATE_ORDER,
		(dto: CreateOrderDto) => createOrder(dto),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification(
					'Заказ оформлен! Перейдите в профиль для подтверждения!',
					'success',
					1800
				);
				refetch();
			},
		}
	);

	return {
		data: data || [],
		addToBasketMutation,
		decrementBasketItemMutation,
		incrementBasketItemMutation,
		createOrderMutation,
	};
};
