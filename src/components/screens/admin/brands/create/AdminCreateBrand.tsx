import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { getAdminUrl } from '@/config/url.config';
import { useCreateBrand } from '@/hooks/data/brand/useCreateBrand';
import { CreateBrandDto } from '@/services/brand.service';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
export const AdminCreateBrand: FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		control,
	} = useForm<CreateBrandDto>({
		mode: 'onChange',
	});

	const { createBrandMutation } = useCreateBrand();

	const onSubmit: SubmitHandler<CreateBrandDto> = data => {
		createBrandMutation(data);
		reset();
	};

	return (
		<Meta title='Страница создания бренда'>
			<Link className='my-link' href={getAdminUrl('brands')}>
				К брендам
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
					rules={{
						required: 'Фото обязательное поле',
					}}
				/>
				<Button>Подтвердить</Button>
			</form>
		</Meta>
	);
};
