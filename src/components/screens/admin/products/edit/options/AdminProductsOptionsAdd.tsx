import { Button } from '@/components/ui/form-elements/Button';
import { useProduct } from '@/hooks/data/product/useAdminProduct';
import { useProductOptions } from '@/hooks/data/product/useProductOptions';
import { Option, OptionValue } from '@/types/option.types';
import { FC, FormEvent, useState } from 'react';
import styles from './AdminProductsOptions.module.scss';

const group = 'product-option-group';

export const AdminProductsOptionsAdd: FC = () => {
	const { data: product, addProductOptionMutation } = useProduct();

	const [option, setOption] = useState<string>('');

	const { category } = useProductOptions(product?.category.id);

	const options = category?.options || [];

	const onSumbit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (option) {
			const dto = option.split('-').map(item => Number(item));

			addProductOptionMutation({
				optionId: dto[0],
				optionValueId: dto[1],
			});
			setOption('');
		}
	};

	const isDisabled = (option: Option, value: OptionValue) => {
		const productsOptions = product?.options || {};

		if (
			productsOptions.hasOwnProperty(option.optionName) &&
			productsOptions[option.optionName] == value.value
		) {
			return true;
		} else {
			return false;
		}
	};

	return (
		<form onSubmit={onSumbit} className={styles.form}>
			{options.map(option => (
				<div className={styles.option} key={option.id + option.optionName}>
					<span>{option.optionName}:</span>
					{option.values.map(value => (
						<label key={value.id + value.value}>
							{value.value}
							<input
								className={styles.value}
								onChange={e => setOption(e.target.value)}
								disabled={isDisabled(option, value)}
								type='radio'
								value={`${option.id}-${value.id}`}
								name={group}
							/>
						</label>
					))}
				</div>
			))}

			<Button>добавить</Button>
		</form>
	);
};
