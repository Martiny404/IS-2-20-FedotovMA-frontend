import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from 'react';
import { FieldError } from 'react-hook-form';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface IFieldProps {
	placeholder: string;
	error?: FieldError | undefined;
}

type InputPropsFieldType = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends InputPropsFieldType {}
