import { DatePicker } from '@/components/ui/date-picker/DatePicker';
import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Select } from '@/components/ui/form-elements/select/Select';
import { TextField } from '@/components/ui/form-elements/text-field/TextField';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { Heading } from '@/components/ui/heading/Heading';
import { getAdminUrl } from '@/config/url.config';
import { useEditAndRemoveBrand } from '@/hooks/data/brand/useEditAndRemoveBrand';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { useEditOffer } from '@/hooks/data/offers/useEditOffer';
import { IEditBrand } from '@/services/brand.service';
import { UpdateOfferDto } from '@/services/offer.service';
import { createCategoryAndBrandOptions } from '@/utils/createBrandsAndCategoriesOptions';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import { AdminDeleteOffer } from './AdminDeleteOffer';

export const EditOffer: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		control,
	} = useForm<UpdateOfferDto>({
		mode: 'onChange',
	});

	const {
		data: brand,
		editOfferMutation,
		removeOfferMutation,
	} = useEditOffer(setValue);

	const brands = useGetAllBrands();
	const categories = useGetAllCategories();

	const catOpt = createCategoryAndBrandOptions(categories);
	const brandOpt = createCategoryAndBrandOptions(brands);

	const onSubmit: SubmitHandler<UpdateOfferDto> = data => {
		editOfferMutation(data);
	};

	if (!brand) {
		return null;
	}
	return (
		<Meta
			title='Страница удаления и изменения акции'
			description='На этой странице администратору предоставлен функционал по удалению и изменения акции'
		>
			<Heading headingLevel='h1' style={{ marginBottom: 30 }}>
				Страница редактирования акции номер {brand?.id}
			</Heading>
			<Link
				className='my-link'
				style={{ display: 'block', marginBottom: 20 }}
				href={getAdminUrl('offers')}
			>
				К панели акций
			</Link>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={clsx(styles.createForm, styles.form)}
			>
				<Field
					{...register('description')}
					placeholder='Описание'
					error={errors.description}
				/>

				<DatePicker {...register('endDate')} error={errors.endDate} />

				<Controller
					name='photo'
					control={control}
					defaultValue=''
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<UploadField
							placeholder='Фото'
							error={error}
							folder='offers'
							value={value}
							onChange={onChange}
						/>
					)}
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
				/>

				<Button>Изменить</Button>
			</form>

			<AdminDeleteOffer handler={() => removeOfferMutation()} />
		</Meta>
	);
};
