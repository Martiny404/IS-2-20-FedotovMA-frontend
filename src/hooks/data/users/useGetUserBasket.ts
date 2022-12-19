import { GET_USER_BASKET } from '@/constants/queries';
import { getUserBasket } from '@/services/user.service';
import { useQuery } from 'react-query';

export const useGetUserBasket = () => {
	const { data } = useQuery(GET_USER_BASKET, () => getUserBasket());
	return {
		data,
	};
};
