import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Heading } from '@/components/ui/heading/Heading';
import { Modal } from '@/components/ui/modal';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../Profile.module.scss';

interface ActivateFormProps {
	opened: boolean;
	onClose: () => void;
	handler: (code: string) => void;
}

export const ActivateForm: FC<ActivateFormProps> = ({
	handler,
	onClose,
	opened,
}) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ code: string }>({ mode: 'onChange' });

	const onSubmit: SubmitHandler<{ code: string }> = data => {
		handler(data.code);
	};

	return (
		<Modal opened={opened} onClose={onClose}>
			<div className={styles.activateForm}>
				<Heading headingLevel='h3'>Подтверждение</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('code', {
							required: 'Код обязательное поле!',
						})}
						placeholder='Код'
						error={errors.code}
					/>
					<Button>отправить</Button>
				</form>
			</div>
		</Modal>
	);
};
