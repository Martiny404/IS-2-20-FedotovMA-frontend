import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { useEditAndRemoveBrand } from '@/hooks/data/brand/useEditAndRemoveBrand';
import { useEditAndRemoveCategory } from '@/hooks/data/category/useEditAndRemoveCategory';
import { IEditBrand } from '@/services/brand.service';
import { IEditCategory } from '@/services/category.service';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import { AdminDeleteCategory } from './AdminDeleteCategory';

export const AdminEditCategory: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IEditCategory>({
		mode: 'onChange',
	});

	const {
		data: category,
		editCategoryMutation,
		removeCategoryMutation,
	} = useEditAndRemoveCategory(setValue);

	const onSubmit: SubmitHandler<IEditCategory> = data => {
		const dto = {
			categoryImgPath: data.categoryImgPath,
			description: data.description,
			name: data.name,
		};

		editCategoryMutation(dto);
	};

	if (!category) {
		return null;
	}
	return (
		<Meta
			title='Страница удаления и изменения бренда'
			description='На этой странице администратору предоставлен функционал по удалению и изменения бренда'
		>
			<Heading headingLevel='h1' style={{ marginBottom: 30 }}>
				Страница редактирования категории номер {category?.id}
			</Heading>
			<div className={styles.links}>
				<Link
					className={clsx('my-link', styles.link)}
					href={getAdminUrl('categories')}
				>
					К панели категорий
				</Link>
				<Link
					className={clsx('my-link', styles.link)}
					href={getAdminUrl('categories/options')}
				>
					К общим характеристикам
				</Link>
				<Link
					className={clsx('my-link', styles.link)}
					href={getAdminUrl(`categories/options/${category.id}`)}
				>
					Характеристики категории
				</Link>
			</div>
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
					name='categoryImgPath'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='category'
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<Button>Изменить</Button>
			</form>

			<AdminDeleteCategory handler={() => removeCategoryMutation()} />
		</Meta>
	);
};
