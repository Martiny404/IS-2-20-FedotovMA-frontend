import { ProfileOrders } from '@/components/screens/profile/orders/ProfileOrders';
import { Profile } from '@/components/screens/profile/Profile';
import { NextPageAuth } from '@/types/auth.types';

const ProfileOrdersPage: NextPageAuth = () => {
	return <ProfileOrders />;
};

export default ProfileOrdersPage;

ProfileOrdersPage.onlyForUsers = true;
