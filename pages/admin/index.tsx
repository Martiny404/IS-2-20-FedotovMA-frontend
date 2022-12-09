import { Admin } from '@/components/screens/admin/Admin';
import { NextPageAuth } from '@/types/auth.types';

const AdminHomePage: NextPageAuth = () => {
	return <Admin />;
};

AdminHomePage.onlyForAdmin = true;

export default AdminHomePage;
