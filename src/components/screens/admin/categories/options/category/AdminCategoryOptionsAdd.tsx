import { Button } from '@/components/ui/form-elements/Button';
import { Select } from '@/components/ui/form-elements/select/Select';
import { useCategoryOptions } from '@/hooks/data/category/useCategoryOptions';
import { useOption } from '@/hooks/data/option/useOption';
import { createOptions } from '@/utils/createOptions';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

export const AdminCategoryOptionsAdd: FC = () => {
	const { addOptionMutation } = useCategoryOptions();

	const { control, handleSubmit, reset } = useForm<{ optionId: number }>({
		mode: 'onChange',
	});

	const { options } = useOption();

	const selectOptions = createOptions(options);

	const onSubmit: SubmitHandler<{ optionId: number }> = data => {
		addOptionMutation(data.optionId);
		reset();
	};

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 40 }}>
				<Controller
					control={control}
					name='optionId'
					render={({ field, fieldState: { error } }) => (
						<Select
							field={field}
							options={selectOptions || []}
							placeholder='Характеристика'
							error={error}
						/>
					)}
					rules={{
						required: 'Характеристика обязательное поле',
					}}
				/>
				<Button>Добавить</Button>
			</form>
		</>
	);
};
