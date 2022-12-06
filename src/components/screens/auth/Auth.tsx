import { Meta } from '@/utils/meta/Meta';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import { AuthFields } from './AuthFields';
import styles from './Auth.module.scss';
import { Button } from '@/components/ui/form-elements/Button';

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
			<section className={styles.auth}>
				<form>
					<AuthFields
						formState={formState}
						register={registerField}
						isPasswordRequired
					/>
					<Button>подтвердить</Button>
				</form>
			</section>
		</Meta>
	);
};
