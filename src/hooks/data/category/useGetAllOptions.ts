import { GET_ALL_OPTIONS } from '@/constants/queries';
import { getCategoryOptions } from '@/services/category.service';
import { errorHandler } from '@/utils/error-handler';
import { useQuery } from 'react-query';

export const useGetAllOptions = (optionId: number) => {
	const { data, refetch } = useQuery(
		[GET_ALL_OPTIONS, optionId],
		() => getCategoryOptions(optionId),
		{
			onError(e) {
				errorHandler(e);
			},
		}
	);
	return {
		data,
		refetch,
	};
};
