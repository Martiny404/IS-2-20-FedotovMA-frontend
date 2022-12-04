import { MaterialIconType, MaterialIcon } from '@/components/ui/MaterialIcon';
import {
	Badge,
	ListItem,
	ListItemButton,
	ListItemIcon,
	Typography,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from '../Header.module.scss';

export interface INavItem {
	title: string;
	link: string;
	text?: string;
	notifications?: number;
	icon: MaterialIconType;
}

export const NavigatiomItem: FC<INavItem> = ({
	link,
	title,
	notifications,
	text,
	icon,
}) => {
	const { asPath } = useRouter();

	return (
		<ListItem disablePadding>
			<Link className={styles.link} href={link}>
				<ListItemButton>
					<ListItemIcon>
						<Badge
							badgeContent={notifications ? notifications : null}
							color='primary'
						>
							<MaterialIcon muiName={icon} />
						</Badge>
					</ListItemIcon>
					<Typography
						className={styles.linkText}
						fontWeight={700}
						color={asPath === link ? 'primary' : '#000'}
						variant='caption'
					>
						{text ? `${title}: ${text}` : title}
					</Typography>
				</ListItemButton>
			</Link>
		</ListItem>
	);
};
