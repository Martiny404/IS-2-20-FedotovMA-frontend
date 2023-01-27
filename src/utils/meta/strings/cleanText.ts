import {
	REMOVE_AMPERSANDS_AND_SEMICOLONS,
	REMOVE_HTML_TAGS,
	REMOVE_SYMBOLS,
} from '@/shared/regexp/cleanText.regexp';

export const cleanText = (
	string: string,
	limit: null | number = null
): string => {
	let result = string
		.replace(REMOVE_HTML_TAGS, '')
		.replace(REMOVE_AMPERSANDS_AND_SEMICOLONS, ' ')
		.replace(REMOVE_SYMBOLS, '');
	if (limit) result = result.slice(0, limit) + '...';
	return result;
};
