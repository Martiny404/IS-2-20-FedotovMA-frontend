import { useRouter } from 'next/router';

export const useRedirect = () => {
	const { push } = useRouter();

	push('/404');
};
