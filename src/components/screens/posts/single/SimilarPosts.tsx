import { Button } from '@/components/ui/form-elements/Button';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Modal } from '@/components/ui/modal';
import { getPostsUrl } from '@/config/url.config';
import { IPost } from '@/types/posts.types';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import styles from '../Posts.module.scss';

export const SimilarPosts: FC<{ similarPosts: IPost[] }> = ({
	similarPosts,
}) => {
	const [open, setOpen] = useState(false);

	return (
		<div className={styles.similarPosts}>
			<Button onClick={() => setOpen(true)}>Показать похожие</Button>
			<Modal opened={open} onClose={() => setOpen(false)}>
				<ul className={styles.similarPostsList}>
					{similarPosts.length > 0 ? (
						similarPosts.map(post => (
							<li className={styles.similarPost} key={post.id}>
								<Link href={getPostsUrl(post.id)}>
									<Image
										src={post.poster}
										width={160}
										height={80}
										alt={post.theme}
									/>
								</Link>

								<strong>{post.theme}</strong>
								<div className={styles.views}>
									<MaterialIcon muiName='AiFillEye' />
									<span>{post.views}</span>
								</div>
							</li>
						))
					) : (
						<span>asdasd</span>
					)}
				</ul>
			</Modal>
		</div>
	);
};
