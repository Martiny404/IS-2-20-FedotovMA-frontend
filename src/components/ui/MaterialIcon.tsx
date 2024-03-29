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
	MdModeEditOutline,
} from 'react-icons/md';
import {
	FaGithub,
	FaTelegramPlane,
	FaUsers,
	FaVk,
	FaTrash,
	FaChevronUp,
	FaHome,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdPricetags } from 'react-icons/io';
import { BsFillGearFill, BsCheckLg } from 'react-icons/bs';
import { GrRedo, GrUserWorker } from 'react-icons/gr';
import { TbReportAnalytics } from 'react-icons/tb';
import { GoPackage } from 'react-icons/go';
import { RiArticleLine } from 'react-icons/ri';
import { CgSmileSad } from 'react-icons/cg';
import { AiFillEye } from 'react-icons/ai';
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
	['MdModeEditOutline']: MdModeEditOutline,
	['GrRedo']: GrRedo,
	FaTrash: FaTrash,
	RiArticleLine: RiArticleLine,
	CgSmileSad: CgSmileSad,
	BsCheckLg: BsCheckLg,
	AiFillEye: AiFillEye,
	FaChevronUp: FaChevronUp,
	FaHome: FaHome,
};

export type MaterialIconType = keyof typeof icons;

export const MaterialIcon: FC<{ muiName: MaterialIconType }> = ({
	muiName,
}) => {
	const IconComponent = icons[muiName];

	return <IconComponent />;
};
