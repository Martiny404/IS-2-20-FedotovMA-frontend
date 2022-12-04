import { FC } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MaterialLink from '@mui/material/Link';
import { AppBar, Container, Divider, Toolbar, Typography } from '@mui/material';
import { MaterialIcon, MaterialIconType } from '../../ui/MaterialIcon';

import styles from './Footer.module.scss';

interface IFooterLink {
	title: string;
	link: string;
	icon: MaterialIconType;
}

const links: IFooterLink[] = [
	{
		title: 'vk',
		link: 'https://vk.com/fedotovmax42',
		icon: 'PublicIcon',
	},
	{
		title: 'GitHub',
		link: 'https://github.com/Martiny404',
		icon: 'GitHubIcon',
	},
	{
		title: 'Telegram',
		link: 'https://t.me/maximfed0t0v',
		icon: 'TelegramIcon',
	},
];

export const Footer: FC = () => {
	return (
		<AppBar
			component='footer'
			className={styles.footer}
			color='secondary'
			position='static'
		>
			<Box>
				<Container maxWidth='sm'>
					<Grid container spacing={2}>
						{links.map(item => {
							return (
								<Grid key={item.link} className={styles.gridItem} item xs={4}>
									<MaterialLink
										className={styles.link}
										target='_blank'
										href={item.link}
									>
										<MaterialIcon muiName={item.icon} />
										<span>{item.title}</span>
									</MaterialLink>
								</Grid>
							);
						})}
					</Grid>
					<Divider color='#fff' />

					<div className={styles.text}>
						<Typography component='span' variant='body1'>
							&copy; FedotovShop | {new Date().getFullYear()} год
						</Typography>
					</div>
				</Container>
			</Box>
		</AppBar>
	);
};
