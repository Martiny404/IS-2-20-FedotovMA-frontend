import {
	ButtonHTMLAttributes,
	CSSProperties,
	InputHTMLAttributes,
	TextareaHTMLAttributes,
} from 'react';
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

type TextProps = TextareaHTMLAttributes<HTMLTextAreaElement> & IFieldProps;

export interface ITextArea extends TextProps {}

export interface IUploadField {
	folder?: string;
	value?: string;
	onChange: (...event: any[]) => void;
	placeholder: string;
	error?: FieldError;
	style?: CSSProperties;
	isNoImage?: boolean;
}
