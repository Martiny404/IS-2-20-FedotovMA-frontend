import clsx from 'clsx';
import { FC, InputHTMLAttributes, memo } from 'react';

export const DatePicker: FC<InputHTMLAttributes<HTMLInputElement>> = memo(
	({ value, onChange, className, ...rest }) => {
		return (
			<input
				type='date'
				value={value}
				onChange={onChange}
				className={clsx('my-datepicker', className)}
				{...rest}
			/>
		);
	}
);

DatePicker.displayName = 'DatePicker';
