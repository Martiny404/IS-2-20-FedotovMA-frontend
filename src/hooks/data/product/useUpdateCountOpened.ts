import { updateCountOpened } from '@/services/product.service';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

export const useUpdateCountOpened = (productId: number) => {
	const { mutateAsync } = useMutation('update count opened', () =>
		updateCountOpened(productId)
	);

	useEffect(() => {
		mutateAsync();
	}, []);
};
