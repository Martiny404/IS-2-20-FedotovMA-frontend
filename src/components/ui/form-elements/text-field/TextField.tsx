import { forwardRef } from 'react';

import styles from '../form-elements.module.scss';
import { useOutside } from '@/hooks/useOutside';
import clsx from 'clsx';
import { ITextArea } from '../form.interface';

export const TextField = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ placeholder, error, style, className, ...rest }, ref) => {
		const { isShow, ref: divRef, setIsShow } = useOutside(false);

		const focus = () => {
			setIsShow(true);
		};

		return (
			<div
				ref={divRef}
				onClick={focus}
				className={clsx(styles.field, styles.textField, className, {
					[styles.focused]: isShow,
				})}
				style={style}
			>
				<label>
					<span>{placeholder}</span>
					<textarea ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

TextField.displayName = 'TextField';
