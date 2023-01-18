import { GetStaticProps, NextPage } from 'next';
import { getAllPosts } from '@/services/posts.service';
import { IPost } from '@/types/posts.types';
import { Posts } from '@/components/screens/posts/Posts';

const PostsPage: NextPage<{ posts: IPost[] }> = ({ posts }) => {
	return <Posts posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const data = await getAllPosts();

		return {
			props: {
				posts: data,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default PostsPage;
