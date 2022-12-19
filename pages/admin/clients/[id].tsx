import { AdminClient } from '@/components/screens/admin/clients/admin-client/AdminClient';
import { NextPageAuth } from '@/types/auth.types';

const AdminClientPage: NextPageAuth = () => {
	return <AdminClient />;
};

AdminClientPage.onlyForAdmin = true;

export default AdminClientPage;
