import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { getPostsUrl } from '@/config/url.config';
import { IPost } from '@/types/posts.types';
import { parseDate } from '@/utils/parseDate';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Posts.module.scss';

export const PostsItem: FC<{ post: IPost }> = ({ post }) => {
	return (
		<li className={styles.item}>
			<span className={styles.date}>{parseDate(post.createdAt)}</span>
			<Heading headingLevel='h2' className={styles.title}>
				{post.theme}
			</Heading>
			<Link href={getPostsUrl(post.id)} className={styles.img}>
				<Image fill alt={post.theme} src={post.poster} />
			</Link>
			<div className={styles.views}>
				<MaterialIcon muiName='AiFillEye' />
				<span>{post.views}</span>
			</div>
		</li>
	);
};
