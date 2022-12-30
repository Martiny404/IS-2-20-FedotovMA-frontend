import { ADD_TO_WISHLIST, GET_USER_WISHLIST } from '@/constants/queries';
import { getUserWishlist, toggleToWishlist } from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
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
				errorHandler(e);
			},
		}
	);

	return {
		data: data || [],
		toggleToWishlistMutation,
	};
};
