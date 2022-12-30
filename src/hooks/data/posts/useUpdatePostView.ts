import { updatePostViews } from '@/services/posts.service';
import { useEffect } from 'react';
import { useMutation } from 'react-query';

export const useUpdatePostViews = (postId: number) => {
	const { mutateAsync } = useMutation('update-post-views', () =>
		updatePostViews(postId)
	);

	useEffect(() => {
		mutateAsync();
	}, []);
};
