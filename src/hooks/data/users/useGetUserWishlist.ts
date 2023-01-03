import { errorStatus } from '@/api/helpers.api';
import { ADD_TO_WISHLIST, GET_USER_WISHLIST } from '@/constants/queries';
import { getUserWishlist, toggleToWishlist } from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation, useQuery } from 'react-query';

export const useGetUserWishlist = () => {
	const { data, refetch } = useQuery(GET_USER_WISHLIST, () =>
		getUserWishlist()
	);

	const { mutateAsync: toggleToWishlistMutation } = useMutation(
		ADD_TO_WISHLIST,
		(productId: number) => toggleToWishlist(productId),
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
			retry: 1,
		}
	);

	return {
		data: data || [],
		toggleToWishlistMutation,
	};
};
