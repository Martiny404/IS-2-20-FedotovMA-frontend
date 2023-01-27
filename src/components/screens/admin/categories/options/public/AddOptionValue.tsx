import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Select } from '@/components/ui/form-elements/select/Select';
import { Heading } from '@/components/ui/heading/Heading';
import { Modal } from '@/components/ui/modal';
import { useOption } from '@/hooks/data/option/useOption';
import { AddOptionValueDto } from '@/services/option.service';
import { createOptions } from '@/utils/createOptions';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './AdminOptions.module.scss';

export const AddOptionValue: FC = () => {
	const { options, addOptionValueMutation } = useOption();

	const opt = createOptions(options);

	const {
		register,
		formState: { errors },
		reset,
		control,
		handleSubmit,
	} = useForm<AddOptionValueDto>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<AddOptionValueDto> = data => {
		addOptionValueMutation(data);
		reset();
	};

	const [open, setOpen] = useState(false);

	return (
		<>
			<Button className={styles.actionBtn} onClick={() => setOpen(true)}>
				Добавить значение
			</Button>
			<Modal opened={open} onClose={() => setOpen(false)}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Heading className={styles.title} headingLevel='h2'>
						Добавить Значение
					</Heading>

					<Controller
						control={control}
						name='optionId'
						render={({ field, fieldState: { error } }) => (
							<Select
								field={field}
								options={opt || []}
								placeholder='Характеристика'
								error={error}
							/>
						)}
						rules={{
							required: 'Характеристика обязательное поле',
						}}
					/>
					<Field
						className={styles.field}
						{...register('value', {
							required: 'Значение обязательное поле!',
						})}
						placeholder='Значение'
						error={errors.value}
					/>
					<Button>Добавить</Button>
				</form>
			</Modal>
		</>
	);
};
