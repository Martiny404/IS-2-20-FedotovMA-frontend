import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { getAdminUrl } from '@/config/url.config';
import { useCreateCategory } from '@/hooks/data/category/useCreateCategory';
import { CreateCategoryDto } from '@/services/category.service';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';

export const AdminCreateCategory: FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		control,
	} = useForm<CreateCategoryDto>({
		mode: 'onChange',
	});

	const { createCategoryMutation } = useCreateCategory();

	const onSubmit: SubmitHandler<CreateCategoryDto> = data => {
		createCategoryMutation(data);
		reset();
	};

	return (
		<Meta title='Страница создания категории'>
			<Link className='my-link' href={getAdminUrl('categories')}>
				К категориям
			</Link>
			<form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('name', {
						required: 'Название обязательное поле!',
					})}
					placeholder='Название'
					error={errors.name}
				/>
				<Controller
					name='categoryImgPath'
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
					rules={{
						required: 'Фото обязательное поле',
					}}
				/>
				<Button>Подтвердить</Button>
			</form>
		</Meta>
	);
};
