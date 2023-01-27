import { Profile } from '@/components/screens/profile/Profile';
import { NextPageAuth } from '@/types/auth.types';

const ProfilePage: NextPageAuth = () => {
	return <Profile />;
};

export default ProfilePage;

ProfilePage.onlyForUsers = true;
