import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { getAdminUrl } from '@/config/url.config';
import { useProduct } from '@/hooks/data/product/useAdminProduct';
import Link from 'next/link';
import { FC } from 'react';
import styles from './AdminProductsOptions.module.scss';

export const AdminProductsOptionsList: FC = () => {
	const { data: product, removeProductOptionMutation } = useProduct();

	const options = product?.options || {};

	return (
		<>
			<Link
				style={{ marginBottom: 20 }}
				className='my-link'
				href={getAdminUrl(`products/edit/${product?.id}`)}
			>
				Назад
			</Link>

			{Object.keys(options).length == 0 ? (
				<Heading headingLevel='h1'>Характеристик нет!</Heading>
			) : (
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
			)}
		</>
	);
};
