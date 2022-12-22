import { CREATE_BRAND } from '@/constants/queries';
import { createCategory, CreateCategoryDto } from '@/services/category.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation } from 'react-query';

export const useCreateCategory = () => {
	const { mutateAsync: createCategoryMutation } = useMutation(
		CREATE_BRAND,
		(dto: CreateCategoryDto) => createCategory(dto),
		{
			onSuccess() {
				notification('Категорию создана успешно!', 'success', 1300);
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		createCategoryMutation,
	};
};
