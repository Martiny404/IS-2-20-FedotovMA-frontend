import { Heading } from '@/components/ui/heading/Heading';
import { getCategoriesUrl } from '@/config/url.config';
import { ICategory } from '@/types/category.types';
import Link from 'next/link';
import { FC } from 'react';
import { MaterialIcon, MaterialIconType } from '../../../ui/MaterialIcon';
import styles from './Sidebar.module.scss';

interface ISidebar {
	items: ICategory[];
	iconName: MaterialIconType;
}

export const Sidebar: FC<ISidebar> = ({ items, iconName }) => {
	return (
		<aside className={styles.sidebar}>
			<Heading className={styles.title} headingLevel='h4'>
				Категории
			</Heading>
			<ul className='simple-list'>
				{items.map(item => {
					return (
						<li key={item.id}>
							<Link href={`${getCategoriesUrl(item.id)}`}>
								<span className='my-link'>{item.name}</span>
							</Link>
						</li>
					);
				})}
			</ul>
			<div className='my-icon'>
				<MaterialIcon muiName={iconName} />
			</div>
		</aside>
	);
};
