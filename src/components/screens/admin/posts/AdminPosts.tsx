import { BCCard } from '@/components/ui/bc-card/BCCard';
import { getAdminUrl } from '@/config/url.config';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { Meta } from '@/utils/meta/Meta';
import Link from 'next/link';
import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from '../AdminPublic.module.scss';
import { usePost } from '@/hooks/data/posts/usePost';

export const AdminPosts: FC = () => {
	const posts = usePost();

	return (
		<Meta
			title='Страница со списком статей в админ-панеле'
			description='Здесь полный список статей, представленных в магазине'
		>
			<AdminNavigation />

			<Link href={getAdminUrl('posts/create')} className='my-link'>
				Создать статью
			</Link>

			<ul className={styles.list}>
				{posts.map(post => (
					<BCCard
						type='post'
						key={post.id}
						item={{
							id: post.id,
							name: post.theme,
							image: post.poster,
						}}
						forAdmin={true}
					/>
				))}
			</ul>
		</Meta>
	);
};
