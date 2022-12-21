import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import { Select } from '@/components/ui/form-elements/select/Select';

import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { useEditProduct } from '@/hooks/data/product/useEditProduct';
import { IUpdateProduct } from '@/types/product.types';
import { productStatusMapper } from '@/utils/enum/productStatusMapper';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './EditAdminProduct.module.scss';

export const EditAdminProduct: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<IUpdateProduct>({
		mode: 'onChange',
	});

	const { data: product, editProductMutation } = useEditProduct(setValue);

	const statusOptions = productStatusMapper();

	const onSubmit: SubmitHandler<IUpdateProduct> = data => {
		editProductMutation(data);
	};

	return (
		<>
			<Heading headingLevel='h1' style={{ marginBottom: 30 }}>
				Страница редактирования продукта номер {product?.id}
			</Heading>
			<Link
				className='my-link'
				style={{ display: 'block', marginBottom: 20 }}
				href={getAdminUrl('products')}
			>
				К панели продуктов
			</Link>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<Field
					{...register('name')}
					placeholder='Название'
					error={errors.inStock}
				/>
				<TextField
					{...register('description')}
					placeholder='Описание'
					error={errors.description}
				/>
				<Field
					{...register('inStock')}
					placeholder='Количество в наличии'
					type='number'
					step='any'
					className='digit-input'
					error={errors.inStock}
				/>
				<Field
					{...register('price')}
					placeholder='Цена'
					type='number'
					step='any'
					className='digit-input'
					error={errors.price}
				/>
				<Field
					{...register('discount_percentage')}
					placeholder='Процент скидки'
					type='number'
					step='any'
					className='digit-input'
					error={errors.discount_percentage}
				/>
				<Controller
					name='poster'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='product'
							value={value}
							onChange={onChange}
						/>
					)}
				/>

				<Controller
					control={control}
					name='status'
					render={({ field, fieldState: { error } }) => (
						<Select
							field={field}
							options={statusOptions || []}
							placeholder='Статус'
							error={error}
						/>
					)}
				/>
				<Button>Изменить</Button>
			</form>
			<div className='hr'></div>
			<Link
				className='my-link'
				style={{ display: 'block', marginTop: 10 }}
				href={getAdminUrl(`products/edit/${product?.id}/photos`)}
			>
				Изменить фотографии
			</Link>
		</>
	);
};
