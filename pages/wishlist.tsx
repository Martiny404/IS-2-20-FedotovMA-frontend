import { Wishlist } from '@/components/screens/wishlist/Wishlist';
import { NextPageAuth } from '@/types/auth.types';

const WishlistPage: NextPageAuth = () => {
	return <Wishlist />;
};

WishlistPage.onlyForUsers = true;

export default WishlistPage;
