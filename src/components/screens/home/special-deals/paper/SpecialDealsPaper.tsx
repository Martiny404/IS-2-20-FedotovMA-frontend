import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Paper } from '@/components/ui/paper/Paper';
import {
	Button,
	List,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';
import styles from './SpecialDealsPaper.module.scss';

export const SpecialDealsPaper: FC = () => {
	return (
		<Paper height='100%'>
			<div className={styles.Mypaper}>
				<Typography variant='h6' component='span'>
					Акции
				</Typography>
				<List>
					<ListItem>
						<Link href='/offers/brands'>
							<ListItemText className='my-link' primary='По брендам' />
						</Link>
					</ListItem>
					<ListItem>
						<Link href='/offers/categories'>
							<ListItemText className='my-link' primary='По категорям' />
						</Link>
					</ListItem>
				</List>
				<div className={styles.buttonsWrapper}>
					<Button variant='contained' color='primary'>
						Все акции
					</Button>
				</div>
				<div className='my-icon'>
					<MaterialIcon muiName='DiscountIcon' />
				</div>
			</div>
		</Paper>
	);
};
