import {
	MdChevronLeft,
	MdChevronRight,
	MdPerson,
	MdShoppingCart,
	MdOutlineFavorite,
	MdDevicesOther,
	MdOutlineLogin,
	MdOutlineLogout,
	MdSearch,
	MdClose,
	MdStar,
} from 'react-icons/md';
import { FaGithub, FaTelegramPlane, FaVk } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdPricetags } from 'react-icons/io';

import { FC } from 'react';

const icons = {
	['ChevronRight']: MdChevronRight,
	['ChevronLeft']: MdChevronLeft,
	['PersonIcon']: MdPerson,
	['ShoppingCartIcon']: MdShoppingCart,
	['FavoriteIcon']: MdOutlineFavorite,
	['GitHubIcon']: FaGithub,
	['TelegramIcon']: FaTelegramPlane,
	['PublicIcon']: FaVk,
	['DiscountIcon']: IoMdPricetags,
	['DevicesOtherIcon']: MdDevicesOther,
	['LoginIcon']: MdOutlineLogin,
	['LogoutIcon']: MdOutlineLogout,
	['SearchIcon']: MdSearch,
	['MenuIcon']: GiHamburgerMenu,
	['MdClose']: MdClose,
	['MdStar']: MdStar,
};

export type MaterialIconType = keyof typeof icons;

export const MaterialIcon: FC<{ muiName: MaterialIconType }> = ({
	muiName,
}) => {
	const IconComponent = icons[muiName];

	return <IconComponent />;
};
