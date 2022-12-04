import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import PublicIcon from '@mui/icons-material/Public';
import DiscountIcon from '@mui/icons-material/Discount';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import { FC } from 'react';

const icons = {
	['ChevronRight']: ChevronRight,
	['ChevronLeft']: ChevronLeft,
	['PersonIcon']: PersonIcon,
	['ShoppingCartIcon']: ShoppingCartIcon,
	['FavoriteIcon']: FavoriteIcon,
	['GitHubIcon']: GitHubIcon,
	['TelegramIcon']: TelegramIcon,
	['PublicIcon']: PublicIcon,
	['DiscountIcon']: DiscountIcon,
	['DevicesOtherIcon']: DevicesOtherIcon,
};

export type MaterialIconType = keyof typeof icons;

export const MaterialIcon: FC<{ muiName: MaterialIconType }> = ({
	muiName,
}) => {
	const IconComponent = icons[muiName];

	return <IconComponent />;
};
