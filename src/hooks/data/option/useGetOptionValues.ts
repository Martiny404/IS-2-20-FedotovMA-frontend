import { GET_OPTION_VALUES } from '@/constants/queries';
import { getOptionValues } from '@/services/option.service';
import { errorHandler } from '@/utils/error-handler';
import { useQuery } from 'react-query';

export const useGetOptionValues = (optionId: number) => {
	const { data, refetch } = useQuery(
		[GET_OPTION_VALUES, optionId],
		() => getOptionValues(optionId),
		{
			onError(e) {
				errorHandler(e);
			},

			enabled: !!optionId,
		}
	);
};
