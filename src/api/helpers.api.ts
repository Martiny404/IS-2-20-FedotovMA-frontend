export const getContentType = () => ({
	'Content-Type': 'application/json',
});

export const errorCatcher = (error: any): string => {
	return error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.message[0]
			: error.response.data.message
		: error.message;
};

export const errorStatus = (error: any): number => {
	return error.response && error.response.data
		? error.response.data.status
		: error.status;
};
