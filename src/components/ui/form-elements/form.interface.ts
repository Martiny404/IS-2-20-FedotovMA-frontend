import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'contained' | 'outlined';
}

export interface IFieldProps {
	placeholder: string;
	error?: FieldError | undefined;
}

type InputPropsFieldType = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends InputPropsFieldType {}
