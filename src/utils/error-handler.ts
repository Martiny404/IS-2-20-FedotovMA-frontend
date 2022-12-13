import { errorCatcher } from '@/api/helpers.api';
import { notification } from './notification';

export const errorHandler = (error: any) => {
	const message = errorCatcher(error);

	notification(message, 'error', 1800);
	throw message;
};
