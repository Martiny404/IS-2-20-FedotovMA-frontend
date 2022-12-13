import { NextPageAuth } from '@/types/auth.types';

const AdminEditOrderPage: NextPageAuth = () => {
	return <h1>Edit</h1>;
};

AdminEditOrderPage.onlyForAdmin = true;

export default AdminEditOrderPage;
