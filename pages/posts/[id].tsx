import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPosts, getOnePost } from '@/services/posts.service';
import { IPost } from '@/types/posts.types';
import { Post } from '@/components/screens/posts/single/Post';
import { shuffle } from '@/utils/shuffle';

const PostPage: NextPage<{ post: IPost; similarPosts: IPost[] }> = ({
	post,
	similarPosts,
}) => {
	return <Post post={post} similarPosts={similarPosts} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const posts = await getAllPosts();
		const paths = posts.map(p => ({
			params: {
				id: p.id.toString(),
			},
		}));

		return {
			fallback: 'blocking',
			paths,
		};
	} catch (e) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const id = String(params?.id);

		const post = await getOnePost(+id);
		const posts = await getAllPosts();

		const filtered = posts.filter(p => p.id != post.id).slice(0, 4);

		const similarPosts = shuffle<IPost>(filtered);

		return {
			props: {
				post,
				similarPosts,
			},
		};
	} catch (e) {
		return {
			notFound: true,
		};
	}
};

export default PostPage;
