import { Heading } from '@/components/ui/heading/Heading';
import { IPost } from '@/types/posts.types';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import styles from './Posts.module.scss';
import { PostsItem } from './PostsItem';

export const Posts: FC<{ posts: IPost[] }> = ({ posts }) => {
	return (
		<Meta
			title='Страница блога'
			description='Здесь наша команда публикует обзоры на гаджеты и обсуждение новостей IT'
		>
			<div className={styles.wrapper}>
				<Heading style={{ marginBottom: 20 }} headingLevel='h1'>
					Блог
				</Heading>
				<div className={styles.listWrapper}>
					<ul className={styles.list}>
						{posts.map(post => (
							<PostsItem key={post.id} post={post} />
						))}
					</ul>
				</div>
			</div>
		</Meta>
	);
};
