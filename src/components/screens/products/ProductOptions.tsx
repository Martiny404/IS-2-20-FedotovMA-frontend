import { Heading } from '@/components/ui/heading/Heading';
import { IProductOptions } from '@/types/product.types';
import { FC } from 'react';
import styles from './Product.module.scss';

export const ProductOptions: FC<{ options: IProductOptions }> = ({
	options,
}) => {
	return (
		<div className={styles.optionsBlock}>
			<Heading headingLevel='h2'>Характеристики</Heading>
			<ul className={styles.optionsList}>
				{Object.keys(options).map((key, idx) => (
					<li key={`${key}-${options[key]}-${idx}`}>
						<span className={styles.optionName}>{key}</span>
						<div className={styles.dash}></div>
						<span className={styles.optionValue}>{options[key]}</span>
					</li>
				))}
			</ul>
		</div>
	);
};
