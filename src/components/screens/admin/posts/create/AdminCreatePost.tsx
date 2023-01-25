import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { getAdminUrl } from '@/config/url.config';
import { useCreatePost } from '@/hooks/data/posts/useCreatePost';
import { CreatePostDto } from '@/services/posts.service';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';

export const AdminCreatePost: FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		control,
	} = useForm<CreatePostDto>({
		mode: 'onChange',
	});
	const { createPostMutation } = useCreatePost();
	const onSubmit: SubmitHandler<CreatePostDto> = data => {
		createPostMutation(data);
		reset();
	};
	return (
		<Meta title='Страница создания статьи'>
			<Link className='my-link' href={getAdminUrl('posts')}>
				К статьям
			</Link>
			<form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('theme', {
						required: 'Тема статьи обязательное поле!',
					})}
					placeholder='Тема статьи (заголовок)'
					error={errors.theme}
				/>
				<div className={styles.help} style={{ marginBottom: 10 }}>
					Для текста статьи можно использовать HTML-теги!
				</div>
				<TextField
					className={styles.text}
					{...register('text', {
						required: 'Текст обязательное поле!',
					})}
					placeholder='Текст'
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
					rules={{
						required: 'Фото обязательное поле',
					}}
				/>
				<Button>Подтвердить</Button>
			</form>
		</Meta>
	);
};
