import { GET_USER_WISHLIST } from '@/constants/queries';
import { getUserWishlist } from '@/services/user.service';
import { useQuery } from 'react-query';

export const useGetUserWishlist = () => {
	const { data } = useQuery(GET_USER_WISHLIST, () => getUserWishlist());
	return {
		data,
	};
};
