import { GET_ALL_USERS } from '@/constants/queries';
import { getAllUsers } from '@/services/user.service';
import { useQuery } from 'react-query';

export const useGetAllUsers = () => {
	const { data } = useQuery(GET_ALL_USERS, getAllUsers);
	return data;
};
