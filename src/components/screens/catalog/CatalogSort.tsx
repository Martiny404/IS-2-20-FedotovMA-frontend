import { Button } from '@/components/ui/form-elements/Button';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const Select = dynamic(() =>
	import('@/components/ui/form-elements/select/Select').then(mod => mod.Select)
);
import styles from './Catalog.module.scss';

export enum ISortBy {
	PRICE = 'price',
	VIEWS = 'views',
	OFFERS = 'productOrders',
}
export enum ISortType {
	ASC = 'asc',
	DESC = 'desc',
}

interface ICatalogSort {
	by: ISortBy;
	type: ISortType;
}

export const CatalogSort: FC = () => {
	const { push, query } = useRouter();

	const by = query.sort ? query.sort.toString() : undefined;
	const type = query.type ? query.type.toString() : undefined;

	const { control, register, handleSubmit } = useForm<ICatalogSort>({
		mode: 'onChange',
		defaultValues: {
			by: (by as ISortBy) || ISortBy.VIEWS,
			type: (type as ISortType) || ISortType.ASC,
		},
	});

	const options = [
		{
			label: 'По цене',
			value: 'price',
		},
		{
			label: 'По просмотрам',
			value: 'views',
		},
		{
			label: 'По заказам',
			value: 'productOrders',
		},
	];

	const onSubmit: SubmitHandler<ICatalogSort> = data => {
		push({
			query: {
				...query,
				sort: data.by,
				type: data.type,
			},
		});
	};

	return (
		<form className={styles.sort} onSubmit={handleSubmit(onSubmit)}>
			<Controller
				control={control}
				name='by'
				render={({ field, fieldState: { error } }) => (
					<Select
						id={'adjsajdasd'}
						field={field}
						options={options}
						placeholder='Критерий'
						error={error}
					/>
				)}
				rules={{
					required: 'Критерий обязательное поле',
				}}
			/>
			<div>
				<label>
					<input value='asc' type='radio' {...register('type')} />
					<span>По возврастанию</span>
				</label>
				<label>
					<input value='desc' type='radio' {...register('type')} />
					<span>По убыванию</span>
				</label>
			</div>
			<Button className={styles.sortBtn}>применить</Button>
		</form>
	);
};
