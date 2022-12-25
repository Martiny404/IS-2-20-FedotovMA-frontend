import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { useEditAndRemoveBrand } from '@/hooks/data/brand/useEditAndRemoveBrand';
import { IEditBrand } from '@/services/brand.service';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import { AdminDeleteBrand } from './AdminDeleteBrand';

export const AdminEditBrand: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IEditBrand>({
		mode: 'onChange',
	});

	const {
		data: brand,
		editBrandMutation,
		removeBrandMutation,
	} = useEditAndRemoveBrand(setValue);

	const onSubmit: SubmitHandler<IEditBrand> = data => {
		editBrandMutation(data);
	};

	if (!brand) {
		return null;
	}
	return (
		<Meta
			title='Страница удаления и изменения бренда'
			description='На этой странице администратору предоставлен функционал по удалению и изменения бренда'
		>
			<Heading headingLevel='h1' style={{ marginBottom: 30 }}>
				Страница редактирования бренда номер {brand?.id}
			</Heading>
			<Link
				className='my-link'
				style={{ display: 'block', marginBottom: 20 }}
				href={getAdminUrl('brands')}
			>
				К панели брендов
			</Link>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(styles.createForm, styles.form)}
			>
				<Field
					{...register('name')}
					placeholder='Название'
					error={errors.name}
				/>
				<TextField
					className={styles.text}
					{...register('description')}
					placeholder='Описание'
					error={errors.description}
				/>

				<Controller
					name='brandImgPath'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='brand'
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<Button>Изменить</Button>
			</form>

			<AdminDeleteBrand handler={() => removeBrandMutation()} />
		</Meta>
	);
};
