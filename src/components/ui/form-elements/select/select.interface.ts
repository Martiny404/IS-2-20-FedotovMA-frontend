import { ControllerRenderProps } from 'react-hook-form';
import { Options } from 'react-select';

import { IFieldProps } from '../form.interface';

export interface IOption {
	value: any;
	label: string;
}

export interface ISelect extends IFieldProps {
	options: Options<IOption>;
	isMulti?: boolean;
	field: ControllerRenderProps<any, any>;
	isLoading?: boolean;
	id?: any;
}
