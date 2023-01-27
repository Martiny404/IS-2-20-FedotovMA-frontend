import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { Spinner } from '@/components/ui/spinner/Spinner';
import { useGetMe } from '@/hooks/data/users/useGetMe';
import { UpdateUserInfoDto } from '@/services/user.service';
import { Meta } from '@/utils/meta/Meta';
import { parseDate } from '@/utils/parseDate';
import { parseUserRole } from '@/utils/parseUserRole';
import { parseUserStatus } from '@/utils/parseUserStatus';
import Image from 'next/image';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { EditUserForm } from './EditUserForm';
import styles from './Profile.module.scss';
import { ProfileNavigation } from './ProfileNavigation';

export const Profile: FC = () => {
	const {
		data: me,
		isLoading,
		updateUserMutation,
		addValidationCodeMutation,
		success,
		setSuccess,
		codeLoading,
	} = useGetMe();

	const [openForm, setOpenForm] = useState(false);

	const formVisibleHandler = () => {
		if (openForm) {
			setOpenForm(false);
			setSuccess(false);
		} else {
			setOpenForm(true);
		}
	};

	if (isLoading) {
		return (
			<Meta
				title='Мой профиль'
				description='Страница с информацией пользователя'
			>
				<Heading headingLevel='h1'>Загрузка...</Heading>
			</Meta>
		);
	}
	if (!me) {
		return (
			<Meta
				title='Мой профиль'
				description='Страница с информацией пользователя'
			>
				<Heading headingLevel='h1'>Что-то пошло не так...</Heading>
			</Meta>
		);
	}

	const [userStatus, color] = parseUserStatus(me.isActivated);

	return (
		<Meta title='Мой профиль' description='Страница с информацией пользователя'>
			<div className={styles.wrapper}>
				<ProfileNavigation />
				<div className={styles.top}>
					<Image
						src={me?.avatar || '/user.png'}
						alt='фото профиля'
						width={200}
						height={200}
					/>
					<div className={styles.info}>
						<span>Почта: {me.email}</span>
						<span>Дата регистрации: {parseDate(me.createdAt)}</span>
						<span>Роль: {parseUserRole(me.role.roleName)}</span>
						<span className={color}>Статус: {userStatus}</span>
					</div>
				</div>
				<div className={styles.getCode}>
					<Button onClick={() => addValidationCodeMutation()}>
						получить код
					</Button>
					{codeLoading && <Spinner />}
					{success && <span className='green'>Код отправлен!</span>}
				</div>

				<Button
					disabled={!success}
					onClick={formVisibleHandler}
					className={styles.openForm}
				>
					{openForm ? 'закрыть' : 'открыть'} форму изменения
				</Button>

				<CSSTransition
					in={openForm}
					classNames='reminder-anim'
					unmountOnExit
					timeout={300}
				>
					<EditUserForm
						user={me}
						handler={(dto: UpdateUserInfoDto) => {
							updateUserMutation(dto);
							setOpenForm(false);
							setSuccess(false);
						}}
					/>
				</CSSTransition>
			</div>
		</Meta>
	);
};
