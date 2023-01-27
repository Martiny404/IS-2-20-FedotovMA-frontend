import { Heading } from '@/components/ui/heading/Heading';
import { useUpdatePostViews } from '@/hooks/data/posts/useUpdatePostView';
import { IPost } from '@/types/posts.types';
import { Meta } from '@/utils/meta/Meta';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../Posts.module.scss';
import { SimilarPosts } from './SimilarPosts';

export const Post: FC<{ post: IPost; similarPosts: IPost[] }> = ({
	post,
	similarPosts,
}) => {
	useUpdatePostViews(post.id);
	return (
		<>
			<Meta title={post.theme}>
				<div className={styles.post}>
					<Link className={clsx('my-link', styles.toPostsLink)} href='/posts'>
						К списку статей
					</Link>
					<Heading headingLevel='h1'>{post.theme}</Heading>
					<div className={styles.content}>
						<div className={styles.postImg}>
							<Image fill alt={post.theme} src={post.poster} />
						</div>
						<div
							className={styles.postTxt}
							dangerouslySetInnerHTML={{ __html: post.text }}
						></div>
					</div>
					<SimilarPosts similarPosts={similarPosts} />
				</div>
			</Meta>
		</>
	);
};
