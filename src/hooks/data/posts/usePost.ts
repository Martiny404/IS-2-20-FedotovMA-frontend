import { GET_POSTS } from '@/constants/queries';
import { getAllPosts } from '@/services/posts.service';
import { useQuery } from 'react-query';

export const usePost = () => {
	const { data: posts } = useQuery(GET_POSTS, () => getAllPosts());

	return posts || [];
};
