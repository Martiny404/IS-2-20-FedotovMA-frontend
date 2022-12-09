import { errorCatcher } from '@/api/helpers.api';
import { notification } from './notification';

export const errorHandler = (error: any, title?: string) => {
	const message = `${title || 'Ошибка при запросе!'}\n${errorCatcher(error)}`;

	notification(message, 'error');
	throw message;
};
