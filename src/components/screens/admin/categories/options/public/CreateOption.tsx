import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Heading } from '@/components/ui/heading/Heading';
import { Modal } from '@/components/ui/modal';
import { useOption } from '@/hooks/data/option/useOption';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './AdminOptions.module.scss';

export const CreateOption: FC = () => {
	const { createOptionMutation } = useOption();

	const {
		register,
		formState: { errors },
		reset,
		handleSubmit,
	} = useForm<{ name: string }>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<{ name: string }> = data => {
		createOptionMutation(data.name);
		reset();
	};

	const [open, setOpen] = useState(false);

	return (
		<>
			<Button className={styles.actionBtn} onClick={() => setOpen(true)}>
				Создание
			</Button>

			<Modal opened={open} onClose={() => setOpen(false)}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Heading className={styles.title} headingLevel='h2'>
						Создание характеристики
					</Heading>

					<Field
						{...register('name', {
							required: 'Название обязательное поле!',
						})}
						className={styles.field}
						placeholder='Название'
						error={errors.name}
					/>
					<Button>Создать</Button>
				</form>
			</Modal>
		</>
	);
};
