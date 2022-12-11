import { AdminClients } from '@/components/screens/admin/clients/AdminClients';
import { NextPageAuth } from '@/types/auth.types';

const AdminClientsPage: NextPageAuth = () => {
	return <AdminClients />;
};

AdminClientsPage.onlyForAdmin = true;

export default AdminClientsPage;
