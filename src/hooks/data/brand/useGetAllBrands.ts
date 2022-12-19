import { GET_ALL_BRANDS } from '@/constants/queries';
import { getAllBrands } from '@/services/brand.service';
import { useQuery } from 'react-query';

export const useGetAllBrands = () => {
	const { data } = useQuery(GET_ALL_BRANDS, getAllBrands);

	return data || [];
};
