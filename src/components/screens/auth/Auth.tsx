import { Meta } from '@/utils/meta/Meta';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import { AuthFields } from './AuthFields';
import styles from './Auth.module.scss';
import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import { IS_CLIENT } from '@/constants/other';

export const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');
	const { push } = useRouter();
	const {
		register: registerField,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const { login, register } = useActions();

	const { isLoading } = useAuth();

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
		reset();
		if (IS_CLIENT) {
			setTimeout(() => {
				push('/');
			}, 1900);
		}
	};

	return (
		<Meta title='Страница авторизации'>
			<section className={styles.auth}>
				<Heading headingLevel='h1' className={styles.title}>
					Форма входа | регистрации
				</Heading>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AuthFields
						formState={formState}
						register={registerField}
						isPasswordRequired
					/>
					<div className={styles.btns}>
						<Button
							type='submit'
							disabled={isLoading}
							onClick={() => setType('login')}
							variant='outlined'
						>
							Вход
						</Button>
						<Button
							type='submit'
							disabled={isLoading}
							onClick={() => setType('register')}
							variant='outlined'
						>
							Регистрация
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};
