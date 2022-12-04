import { FC } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import { styled } from '@mui/material/styles';

import { drawerWidth } from '../header.constants';
import { IconButton, Typography } from '@mui/material';
import { MaterialIcon } from '../../../ui/MaterialIcon';
import { menu } from './navigation.data';
import { NavigatiomItem } from './NavigatiomItem';

export interface INavigationProps {
	open: boolean;
	handleDrawerClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

export const Navigation: FC<INavigationProps> = ({
	handleDrawerClose,
	open,
}) => {
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
				},
			}}
			variant='persistent'
			anchor='left'
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					<MaterialIcon muiName='ChevronRight' />
					<Typography color='#000' variant='body1'>
						FedotovShop
					</Typography>
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{menu.map(item => (
					<NavigatiomItem
						key={item.link}
						icon={item.icon}
						link={item.link}
						title={item.title}
						notifications={item?.notifications}
						text={item?.text}
					/>
				))}
			</List>
		</Drawer>
	);
};
