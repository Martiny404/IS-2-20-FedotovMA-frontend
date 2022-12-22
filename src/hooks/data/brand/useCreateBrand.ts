import { CREATE_BRAND } from '@/constants/queries';
import { createBrand, CreateBrandDto } from '@/services/brand.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation } from 'react-query';

export const useCreateBrand = () => {
	const { mutateAsync: createBrandMutation } = useMutation(
		CREATE_BRAND,
		(dto: CreateBrandDto) => createBrand(dto),
		{
			onSuccess() {
				notification('Бренд создан успешно!', 'success', 1300);
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		createBrandMutation,
	};
};
