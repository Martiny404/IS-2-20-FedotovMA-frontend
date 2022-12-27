import { Button } from '@/components/ui/form-elements/Button';
import { Select } from '@/components/ui/form-elements/select/Select';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Modal } from '@/components/ui/modal';
import { useCategoryToBrand } from '@/hooks/data/brand/useCategoryToBrand';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { createCategoryAndBrandOptions } from '@/utils/createBrandsAndCategoriesOptions';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../AdminPublic.module.scss';
import optionStyles from '../../categories/options/public/AdminOptions.module.scss';

export const AdminAddCategoryToBrand: FC = () => {
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
	};

	const { addCategoryToBrandMutation, brand, removeCategoryBrandMutation } =
		useCategoryToBrand();

	const categories = useGetAllCategories();

	const options = createCategoryAndBrandOptions(categories);

	const { reset, handleSubmit, control } = useForm<{ categoryId: number }>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<{ categoryId: number }> = data => {
		addCategoryToBrandMutation(data.categoryId);
		reset();
	};

	return (
		<>
			<Button
				onClick={openModal}
				className={styles.addCategoryBtn}
				variant='outlined'
			>
				Добавить категории
			</Button>

			<Modal opened={open} onClose={closeModal}>
				<div className={styles.wrapper}>
					<form
						className={styles.addCategoryForm}
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							control={control}
							name='categoryId'
							render={({ field, fieldState: { error } }) => (
								<Select
									field={field}
									options={options || []}
									placeholder='Категория'
									error={error}
								/>
							)}
							rules={{
								required: 'Категория обязательное поле',
							}}
						/>
						<Button>Добавить</Button>
					</form>

					{brand?.categories && brand.categories.length > 0 ? (
						<ul className={clsx(optionStyles.mainList, optionStyles.list)}>
							{brand?.categories?.map(category => (
								<li className={optionStyles.li} key={category.id}>
									<div className={optionStyles.optionName}>
										<strong>
											Название: <span>{category.name}</span>
										</strong>
										<Button
											onClick={() => removeCategoryBrandMutation(category.id)}
											className={optionStyles.removeBtn}
											variant='outlined'
										>
											<MaterialIcon muiName='MdClose' />
										</Button>
									</div>
								</li>
							))}
						</ul>
					) : null}
				</div>
			</Modal>
		</>
	);
};
