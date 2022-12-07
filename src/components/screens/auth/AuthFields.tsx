import { Field } from '@/components/ui/form-elements/Field';
import { validEmail } from '@/shared/regexp/validEmail.regexp';
import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import styles from './Auth.module.scss';

interface IAuthFields {
	register: UseFormRegister<any>;
	formState: FormState<IAuthInput>;
	isPasswordRequired?: boolean;
}

export const AuthFields: FC<IAuthFields> = ({
	formState: { errors },
	register,
	isPasswordRequired = false,
}) => {
	return (
		<>
			<Field
				className={styles.authField}
				type='text'
				{...register('email', {
					required: 'Электронная почта - обязательное поле!',
					pattern: {
						value: validEmail,
						message: 'Пожалуйста, введите корректный адрес!',
					},
				})}
				placeholder='Электронная почта'
				autoComplete='off'
				error={errors.email}
			/>
			<Field
				className={styles.authField}
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Пароль - обязательное поле!',
								minLength: {
									value: 6,
									message: 'Длина должна быть от 6 символов!',
								},
						  }
						: {}
				)}
				type='password'
				autoComplete='off'
				placeholder='Пароль'
				error={errors.password}
			/>
		</>
	);
};
