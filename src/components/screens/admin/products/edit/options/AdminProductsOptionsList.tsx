import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useProduct } from '@/hooks/data/product/useAdminProduct';
import { FC } from 'react';
import styles from './AdminProductsOptions.module.scss';

export const AdminProductsOptionsList: FC = () => {
	const { data: product, removeProductOptionMutation } = useProduct();

	const options = product?.options || {};

	if (Object.keys(options).length == 0) {
		return <Heading headingLevel='h1'>Характеристик нет!</Heading>;
	}

	return (
		<div>
			{Object.keys(options).map(key => (
				<div className={styles.productOptionWrapper} key={key}>
					<span className={styles.productOption}>{key} :</span>
					<div className={styles.productValue}>
						<span>{options[key]}</span>
						<Button
							onClick={() => removeProductOptionMutation(key)}
							className={styles.removeBtn}
							variant='outlined'
						>
							<MaterialIcon muiName='MdClose' />
						</Button>
					</div>
				</div>
			))}
		</div>
	);
};
