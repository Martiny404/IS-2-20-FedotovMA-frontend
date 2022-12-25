import { CREATE_POST } from '@/constants/queries';
import { createPost, CreatePostDto } from '@/services/posts.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation } from 'react-query';

export const useCreatePost = () => {
	const { mutateAsync: createPostMutation } = useMutation(
		CREATE_POST,
		(dto: CreatePostDto) => createPost(dto),
		{
			onSuccess() {
				notification('Пост создан успешно!', 'success', 1300);
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		createPostMutation,
	};
};
