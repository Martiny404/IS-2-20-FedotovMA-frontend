import { Button } from '@/components/ui/form-elements/Button';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { useOption } from '@/hooks/data/option/useOption';
import clsx from 'clsx';
import { FC } from 'react';
import styles from './AdminOptions.module.scss';

export const AdminOptionsList: FC = () => {
	const { options, removeOptionMutation, removeOptionValueMutation } =
		useOption();

	return (
		<>
			<span className={clsx(styles.warn, 'red')}>
				Перед удалением убедитесь, что удалили характеристику у продукта!
			</span>

			<ul className={clsx(styles.list, styles.mainList)}>
				{options.map(option => {
					return (
						<li className={styles.li} key={option.id}>
							<div className={styles.optionName}>
								<strong>
									Название: <span>{option.optionName}</span>
								</strong>
								<Button
									onClick={() => removeOptionMutation(option.id)}
									className={styles.removeBtn}
									variant='outlined'
								>
									<MaterialIcon muiName='MdClose' />
								</Button>
							</div>

							<ul className={clsx(styles.list, styles.secondList)}>
								{option.values.map(value => (
									<li className={styles.secondLi} key={value.id}>
										<span>Значение: {value.value}</span>
										<Button
											onClick={() => removeOptionValueMutation(value.id)}
											className={styles.removeBtn}
											variant='outlined'
										>
											<MaterialIcon muiName='MdClose' />
										</Button>
									</li>
								))}
							</ul>
						</li>
					);
				})}
			</ul>
		</>
	);
};
