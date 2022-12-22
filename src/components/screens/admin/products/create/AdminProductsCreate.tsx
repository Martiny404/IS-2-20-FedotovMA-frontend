import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Select } from '@/components/ui/form-elements/select/Select';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { getAdminUrl } from '@/config/url.config';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { useProduct } from '@/hooks/data/product/useAdminProduct';
import { createCategoryAndBrandOptions } from '@/utils/createBrandsAndCategoriesOptions';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';

import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ICreateProduct } from './CreateProduct.interface';

import styles from './CreateProduct.module.scss';

export const AdminProductsCreate: FC = () => {
	const brands = useGetAllBrands();
	const categories = useGetAllCategories();

	const { createProductMutation } = useProduct();

	const catOpt = createCategoryAndBrandOptions(categories);
	const brandOpt = createCategoryAndBrandOptions(brands);

	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		control,
	} = useForm<ICreateProduct>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<ICreateProduct> = data => {
		createProductMutation(data);
		reset();
	};

	return (
		<Meta
			title='Страница создания продукта'
			description='На этой странице администратор имеет функционал по созданию продукта'
		>
			<Link
				className='my-link'
				style={{ display: 'block', marginBottom: 20 }}
				href={getAdminUrl('products')}
			>
				К панели продуктов
			</Link>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('name', {
						required: 'Название обязательное поле!',
					})}
					placeholder='Название'
					error={errors.name}
				/>
				<Field
					{...register('price', {
						required: 'Цена обязательное поле!',
						valueAsNumber: true,
					})}
					placeholder='Цена'
					className='digit-input'
					error={errors.price}
					type='number'
					step='any'
				/>

				<Field
					{...register('inStock', {
						required: 'Количество обязательное поле',
						valueAsNumber: true,
					})}
					placeholder='Количетсво в наличии'
					className='digit-input'
					error={errors.inStock}
					type='number'
					step='any'
				/>
				<Field
					{...register('discount_percentage', {
						required: 'Скидка обязательное поле!',
						valueAsNumber: true,
					})}
					placeholder='Скидка %'
					className='digit-input'
					error={errors.discount_percentage}
					type='number'
					step='any'
				/>

				<TextField
					{...register('description')}
					placeholder='Описание'
					error={errors.description}
					className={styles.text}
				/>
				<Controller
					control={control}
					name='brandId'
					render={({ field, fieldState: { error } }) => (
						<Select
							field={field}
							options={brandOpt || []}
							placeholder='Производитель'
							error={error}
						/>
					)}
					rules={{
						required: 'Производитель обязательное поле',
					}}
				/>
				<Controller
					control={control}
					name='categoryId'
					render={({ field, fieldState: { error } }) => (
						<Select
							field={field}
							options={catOpt || []}
							placeholder='Категория'
							error={error}
						/>
					)}
					rules={{
						required: 'Категория обязательное поле',
					}}
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
					rules={{
						required: 'Фото обязательное поле',
					}}
				/>
				<Button>Подтвердить</Button>
			</form>
		</Meta>
	);
};
