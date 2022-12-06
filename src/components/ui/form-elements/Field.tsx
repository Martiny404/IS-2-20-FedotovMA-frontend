import { forwardRef } from 'react';

import { IField } from './form.interface';
import styles from './form-elements.module.scss';
import { useOutside } from '@/hooks/useOutside';
import clsx from 'clsx';

export const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		const { isShow, ref: divRef, setIsShow } = useOutside(false);

		const outline = () => {
			setIsShow(true);
		};

		return (
			<div
				ref={divRef}
				onClick={outline}
				className={clsx(styles.field, {
					[styles.outlined]: isShow,
				})}
				style={style}
			>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';
