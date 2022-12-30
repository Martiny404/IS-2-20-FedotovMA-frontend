import { GET_USER_ME } from '@/constants/queries';
import { getUserMe } from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export const useGetMe = () => {
	const { push } = useRouter();

	const { data, refetch } = useQuery(GET_USER_ME, () => getUserMe(), {
		onError(e) {
			errorHandler(e);
			push('/');
		},
	});
	return {
		data,
	};
};
