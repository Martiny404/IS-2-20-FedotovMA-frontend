import { FC } from 'react';

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
		<footer className={styles.footer}>
			<div className={styles.wrapper}>
				<ul>
					{links.map(item => {
						return (
							<li key={item.link} className={styles.gridItem}>
								<a
									className={styles.link}
									target='_blank'
									href={item.link}
									rel='noreferrer'
								>
									<MaterialIcon muiName={item.icon} />
									<span>{item.title}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='hr'></div>

			<div className={styles.text}>
				<span>&copy; FedotovShop | {new Date().getFullYear()} год</span>
			</div>
		</footer>
	);
};
