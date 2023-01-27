import { FC } from 'react';
import styles from './Spinner.module.scss';

export const Spinner: FC = () => {
	return (
		<div className={styles['lds-ring']}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
