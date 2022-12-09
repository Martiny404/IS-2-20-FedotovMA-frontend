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
	MdCategory,
} from 'react-icons/md';
import { FaGithub, FaTelegramPlane, FaUsers, FaVk } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdPricetags } from 'react-icons/io';
import { BsFillGearFill } from 'react-icons/bs';
import { GrUserWorker } from 'react-icons/gr';
import { TbReportAnalytics } from 'react-icons/tb';
import { GoPackage } from 'react-icons/go';

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
	['BsFillGearFill']: BsFillGearFill,
	['FaUsers']: FaUsers,
	['GrUserWorker']: GrUserWorker,
	['MdCategory']: MdCategory,
	['TbReportAnalytics']: TbReportAnalytics,
	['GoPackage']: GoPackage,
};

export type MaterialIconType = keyof typeof icons;

export const MaterialIcon: FC<{ muiName: MaterialIconType }> = ({
	muiName,
}) => {
	const IconComponent = icons[muiName];

	return <IconComponent />;
};
