import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useCategoryOptions } from '@/hooks/data/category/useCategoryOptions';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './../public/AdminOptions.module.scss';

export const AdminCategoryOptionsList: FC = () => {
	const { category, removeCategoryOptionMutation } = useCategoryOptions();

	if (!category?.options || category.options.length == 0) {
		return (
			<Heading style={{ margin: '30px 0' }} headingLevel='h1'>
				Характеристик нет
			</Heading>
		);
	}
	return (
		<ul
			style={{ margin: '30px 0' }}
			className={clsx(styles.list, styles.mainList)}
		>
			{category.options.map(option => (
				<li className={styles.li} key={option.id}>
					<div className={styles.optionName}>
						<strong>
							Название: <span>{option.optionName}</span>
						</strong>
						<Button
							onClick={() => removeCategoryOptionMutation(option.id)}
							className={styles.removeBtn}
							variant='outlined'
						>
							<MaterialIcon muiName='MdClose' />
						</Button>
					</div>
				</li>
			))}
		</ul>
	);
};
