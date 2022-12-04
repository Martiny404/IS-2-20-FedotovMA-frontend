import { Paper } from '@/components/ui/paper/Paper';
import { Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import styles from './Reminder.module.scss';

export interface IReminderProps {
	title: string;
	text: string;
	link: string;
	linkText: string;
	img: string;
}

export const Reminder: FC<IReminderProps> = ({
	link,
	linkText,
	text,
	title,
	img,
}) => {
	const shortedText = text.slice(0, 40) + '...';

	return (
		<Paper height={230} className={styles.reminder}>
			<div className={styles.block} style={{ backgroundImage: `url(${img})` }}>
				<Typography variant='h6' component='span'>
					{title}
				</Typography>
				<Tooltip title={text}>
					<Typography sx={{ mb: 3 }} variant='body2' component='p'>
						{shortedText}
					</Typography>
				</Tooltip>
				<Link className='my-link' href={link}>
					{linkText}
				</Link>
			</div>
		</Paper>
	);
};
