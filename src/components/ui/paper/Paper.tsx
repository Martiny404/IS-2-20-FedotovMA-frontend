import { FC, PropsWithChildren } from 'react';
import styles from './Paper.module.scss';

export const Paper: FC<
	PropsWithChildren<{ height: number | string; className?: string }>
> = ({ children, height, className }) => {
	const clname = className ? className : '';

	return (
		<div style={{ height: height }} className={`${styles.paper} ${clname}`}>
			{children}
		</div>
	);
};
