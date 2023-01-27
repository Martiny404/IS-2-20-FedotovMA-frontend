import { FC } from 'react';
import ReactSelect, { OnChangeValue } from 'react-select';
import makeAnimated from 'react-select/animated';
import { IOption, ISelect } from './select.interface';
import styles from './Select.module.scss';
import formSx from '../form-elements.module.scss';
const animatedComponents = makeAnimated();

export const Select: FC<ISelect> = ({
	field,
	options,
	placeholder,
	error,
	isLoading,
	isMulti,
	id,
}) => {
	const onChange = (newValue: unknown | OnChangeValue<IOption, boolean>) => {
		field.onChange(
			isMulti
				? (newValue as IOption[]).map(item => item.value)
				: (newValue as IOption).value
		);
	};

	const getValue = () => {
		if (field.value) {
			return isMulti
				? options.filter(opt => field.value.indexOf(opt.value) >= 0)
				: options.find(opt => opt.value === field.value);
		} else {
			return isMulti ? [] : '';
		}
	};

	return (
		<div className={styles.selectContainer}>
			<label>
				<span>{placeholder}</span>
				<ReactSelect
					id={id || 'id'}
					instanceId={id || 'instanceId'}
					classNamePrefix='custom-select'
					options={options}
					value={getValue()}
					isMulti={isMulti}
					placeholder={placeholder}
					onChange={onChange}
					components={animatedComponents}
					isLoading={isLoading}
				/>
			</label>
			{error && <div className={formSx.error}>{error.message}</div>}
		</div>
	);
};
