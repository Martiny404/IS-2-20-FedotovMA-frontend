import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import { IButton } from './form.interface';
import styles from './form-elements.module.scss';

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={clsx(styles.button, className)} {...rest}>
			{children}
		</button>
	);
};
