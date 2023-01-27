import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { useEditPost } from '@/hooks/data/posts/useEditPost';
import { UpdatePostDto } from '@/services/posts.service';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import { AdminDeletePost } from './AdminDeletePost';

export const AdminEditPost: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<UpdatePostDto>({
		mode: 'onChange',
	});

	const {
		data: post,
		editPostMutation,
		removePostMutation,
	} = useEditPost(setValue);

	const onSubmit: SubmitHandler<UpdatePostDto> = data => {
		editPostMutation(data);
	};

	if (!post) {
		return null;
	}
	return (
		<Meta
			title='Страница удаления и изменения статьи'
			description='На этой странице администратору предоставлен функционал по удалению и изменения статьи'
		>
			<Heading headingLevel='h1' style={{ marginBottom: 30 }}>
				Страница редактирования статьи номер {post?.id}
			</Heading>
			<Link
				className='my-link'
				style={{ display: 'block', marginBottom: 20 }}
				href={getAdminUrl('posts')}
			>
				К панели статей
			</Link>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(styles.createForm, styles.form)}
			>
				<Field
					{...register('theme')}
					placeholder='Название'
					error={errors.theme}
				/>
				<TextField
					className={styles.text}
					{...register('text')}
					placeholder='Описание'
					error={errors.text}
				/>

				<Controller
					name='poster'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='posts'
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<Button>Изменить</Button>
			</form>

			<AdminDeletePost handler={() => removePostMutation()} />
		</Meta>
	);
};
