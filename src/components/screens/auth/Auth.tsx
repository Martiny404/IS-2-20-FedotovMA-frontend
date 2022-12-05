import { Meta } from '@/utils/meta/Meta';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import { AuthFields } from './AuthFields';

export const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register: registerField,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	return (
		<Meta title='Страница авторизации'>
			<section>
				<form>
					<AuthFields
						formState={formState}
						register={registerField}
						isPasswordRequired
					/>
				</form>
			</section>
		</Meta>
	);
};
