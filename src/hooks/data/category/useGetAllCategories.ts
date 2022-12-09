import { getAllCategories } from '@/services/category.service';
import { GET_ALL_CATEGORIES } from 'constants/queries';
import { useQuery } from 'react-query';

export const useGetAllCategories = () => {
	const { data } = useQuery(GET_ALL_CATEGORIES, getAllCategories);
	return data;
};
