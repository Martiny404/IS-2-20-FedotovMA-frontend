import { getCategoriesUrl } from '@/config/url.config';
import { ICategory } from '@/types/category.types';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
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
			<Typography variant='h6' component='span'>
				Категории
			</Typography>
			<List>
				{items.map(item => {
					return (
						<ListItem key={item.id}>
							<Link href={`${getCategoriesUrl(item.id)}`}>
								<ListItemText className='my-link' primary={item.name} />
							</Link>
						</ListItem>
					);
				})}
			</List>
			<div className='my-icon'>
				<MaterialIcon muiName={iconName} />
			</div>
		</aside>
	);
};
