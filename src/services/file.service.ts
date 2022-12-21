import { instance } from '@/api/interceptors.api';
import { getFileApi } from '@/config/api.config';

export const upload = async (file: FormData, folder?: string) => {
	return instance.post<{ url: string; name: string }[]>(getFileApi(''), file, {
		params: {
			folder,
		},
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
};
