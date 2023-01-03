import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { UpdateUserInfoDto } from '@/services/user.service';
import { validEmail } from '@/shared/regexp/validEmail.regexp';
import { UserTypes } from '@/types/user.types';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Profile.module.scss';

export const EditUserForm: FC<{
	user: UserTypes.Profile;
	handler: (dto: UpdateUserInfoDto) => void;
}> = ({ user, handler }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
		control,
	} = useForm<UpdateUserInfoDto>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<UpdateUserInfoDto> = data => {
		let email = data.email;
		let password = data.password;
		let avatar = data.avatar;

		if (data.email == '') {
			email = undefined;
		}
		if (data.password == '') {
			password = undefined;
		}

		if (data.avatar == '') {
			avatar = undefined;
		}

		handler({
			code: data.code,
			avatar,
			email,
			password,
		});
		reset();
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('email', {
					pattern: {
						value: validEmail,
						message: 'Пожалуйста, введите корректный адрес!',
					},
				})}
				type='email'
				placeholder='Почта'
				error={errors.email}
				autoComplete='off'
			/>
			<Field
				{...register('password')}
				type='password'
				placeholder='Пароль'
				error={errors.password}
				autoComplete='off'
			/>
			<div className={styles.upload}>
				<Controller
					name='avatar'
					control={control}
					defaultValue={user.avatar}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='user'
							value={value}
							onChange={onChange}
						/>
					)}
				/>
			</div>
			<Field
				{...register('code', {
					required: 'Код обязательное поле!',
					maxLength: 6,
					minLength: 6,
				})}
				placeholder='Код'
				maxLength={6}
				minLength={6}
				error={errors.code}
			/>
			<Button>изменить</Button>
		</form>
	);
};
