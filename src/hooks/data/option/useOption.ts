import {
	ADD_OPTION_VALUE,
	CREATE_OPTION,
	GET_ALL_OPTIONS,
	REMOVE_OPTION,
	REMOVE_OPTION_VALUE,
} from '@/constants/queries';
import {
	AddOptionValueDto,
	addValue,
	createOption,
	getAllOptions,
	removeOption,
	removeValue,
} from '@/services/option.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation, useQuery } from 'react-query';

export const useOption = () => {
	const { data, refetch } = useQuery(GET_ALL_OPTIONS, () => getAllOptions());

	const { mutateAsync: createOptionMutation } = useMutation(
		CREATE_OPTION,
		(name: string) => createOption(name),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
				notification('Характеристика создана успешно!', 'success', 1300);
			},
		}
	);

	const { mutateAsync: removeOptionMutation } = useMutation(
		REMOVE_OPTION,
		(optionId: number) => removeOption(optionId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
				notification('Характеристика удалена успешно!', 'success', 1300);
			},
		}
	);

	const { mutateAsync: addOptionValueMutation } = useMutation(
		ADD_OPTION_VALUE,
		(dto: AddOptionValueDto) => addValue(dto),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
				notification('Значение добавлено успешно!', 'success', 1300);
			},
		}
	);

	const { mutateAsync: removeOptionValueMutation } = useMutation(
		REMOVE_OPTION_VALUE,
		(valueId: number) => removeValue(valueId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
				notification('Значение удалено успешно!', 'success', 1300);
			},
		}
	);

	return {
		options: data || [],
		createOptionMutation,
		removeOptionMutation,
		addOptionValueMutation,
		removeOptionValueMutation,
	};
};
