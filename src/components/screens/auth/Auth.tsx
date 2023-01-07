import { Meta } from '@/utils/meta/Meta';
import { FC, useCallback, useState } from 'react';
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
import { Modal } from '@/components/ui/modal';

export const Auth: FC = () => {
	const [type, setType] = useState<'login' | 'register'>('login');
	const [open, setOpen] = useState(false);
	const { push } = useRouter();
	const {
		register: registerField,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	});

	const handleClose = useCallback(() => {
		setOpen(false);
		if (IS_CLIENT) {
			setTimeout(() => {
				push('/');
			}, 600);
		}
	}, [push]);

	const { login, register } = useActions();

	const { isLoading } = useAuth();

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data);
		else if (type === 'register') register(data);
		reset();
		if (type === 'login') {
			if (IS_CLIENT) {
				setTimeout(() => {
					push('/');
				}, 1900);
			}
		} else {
			setOpen(true);
		}
	};

	return (
		<Meta title='Вход | Регистрация'>
			<section className={styles.auth}>
				<Heading headingLevel='h1' className={styles.title}>
					Форма входа | регистрации
				</Heading>
				<Modal onClose={handleClose} opened={open}>
					<div className={styles.modal}>
						<span>Подтвердите регистрацию по почте!</span>
					</div>
				</Modal>
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
