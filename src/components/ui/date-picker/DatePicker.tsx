import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, memo } from 'react';
import { IDatePicker } from '../form-elements/form.interface';
import styles from '../form-elements/form-elements.module.scss';

export const DatePicker = forwardRef<HTMLInputElement, IDatePicker>(
	({ value, error, onChange, className, ...rest }, ref) => {
		return (
			<div>
				<label>
					<input
						ref={ref}
						type='date'
						value={value}
						onChange={onChange}
						className={clsx('my-datepicker', className)}
						{...rest}
					/>
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);
DatePicker.displayName = 'DatePicker';
