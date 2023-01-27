import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import UploadField from '@/components/ui/form-elements/upload-field/UploadField';
import { getAdminUrl } from '@/config/url.config';
import { Meta } from '@/utils/meta/Meta';
import { CreteOfferDto } from '@/services/offer.service';
import Link from 'next/link';
import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import { useCreateOffer } from '@/hooks/data/offers/useCreateOffer';
import { Select } from '@/components/ui/form-elements/select/Select';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { createCategoryAndBrandOptions } from '@/utils/createBrandsAndCategoriesOptions';
import { DatePicker } from '@/components/ui/date-picker/DatePicker';

export const CreateOffer: FC = () => {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
		control,
	} = useForm<CreteOfferDto>({
		mode: 'onChange',
	});

	const { createOfferMutation } = useCreateOffer();

	const onSubmit: SubmitHandler<CreteOfferDto> = data => {
		createOfferMutation(data);
		reset();
	};

	const brands = useGetAllBrands();
	const categories = useGetAllCategories();

	const catOpt = createCategoryAndBrandOptions(categories);
	const brandOpt = createCategoryAndBrandOptions(brands);

	return (
		<Meta title='Страница создания акции'>
			<Link className='my-link' href={getAdminUrl('offers')}>
				К акциям
			</Link>
			<form className={styles.createForm} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('description')}
					placeholder='Описание'
					error={errors.description}
				/>

				<DatePicker
					{...register('endDate', {
						required: 'Окончание акции обязательное поле!',
					})}
					error={errors.endDate}
				/>

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
					rules={{
						required: 'Фото обязательное поле',
					}}
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
				<Button>Подтвердить</Button>
			</form>
		</Meta>
	);
};
