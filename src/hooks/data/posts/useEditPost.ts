import { getAdminUrl } from '@/config/url.config';
import { EDIT_BRAND, GET_ONE_POST, REMOVE_POST } from '@/constants/queries';

import {
	editPost,
	getOnePost,
	UpdatePostDto,
	deletePost,
} from '@/services/posts.service';
import { errorHandler } from '@/utils/error-handler';
import { getKeys } from '@/utils/getKeys';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

export const useEditPost = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter();

	const postId = String(query.id);

	const { data, refetch } = useQuery(GET_ONE_POST, () => getOnePost(+postId), {
		onError(e) {
			errorHandler(e);
			push('/admin');
		},
		onSuccess(d) {
			getKeys(d).forEach(key => {
				setValue(key, d[key]);
			});
		},
		enabled: !!query.id,
		retry: 1,
	});

	const { mutateAsync: editPostMutation } = useMutation(
		EDIT_BRAND,
		(dto: UpdatePostDto) => editPost(+postId, dto),
		{
			onSuccess() {
				notification('Пост изменен успешно', 'success', 1500);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removePostMutation } = useMutation(
		REMOVE_POST,
		() => deletePost(+postId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Пост удален успешно', 'success', 1500);
				push(getAdminUrl('posts'));
			},
		}
	);

	return {
		data,
		editPostMutation,
		removePostMutation,
	};
};
