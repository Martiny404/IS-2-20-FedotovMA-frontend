import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { IButton } from './form.interface';
import styles from './form-elements.module.scss';

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'contained',
	...rest
}) => {
	const variantClass =
		variant === 'contained' ? styles.btnContained : styles.btnOutlined;

	return (
		<button className={clsx(styles.button, variantClass, className)} {...rest}>
			{children}
		</button>
	);
};
