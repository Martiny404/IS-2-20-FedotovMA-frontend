import { AdminOrder } from '@/components/screens/admin/orders/AdminOrder';
import { NextPageAuth } from '@/types/auth.types';

const AdminOrderPage: NextPageAuth = () => {
	return <AdminOrder />;
};

AdminOrderPage.onlyForAdmin = true;

export default AdminOrderPage;
