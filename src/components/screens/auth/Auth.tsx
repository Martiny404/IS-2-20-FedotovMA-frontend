import { Meta } from '@/utils/meta/Meta';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IAuthInput } from './auth.interface';
import { AuthFields } from './AuthFields';
import styles from './Auth.module.scss';
import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';

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
				<Heading headingLevel='h1' className={styles.title}>
					Форма входа | регистрации
				</Heading>
				<form>
					<AuthFields
						formState={formState}
						register={registerField}
						isPasswordRequired
					/>
					<div className={styles.btns}>
						<Button variant='outlined'>Вход</Button>
						<Button variant='outlined'>Регистрация</Button>
					</div>
				</form>
			</section>
		</Meta>
	);
};
