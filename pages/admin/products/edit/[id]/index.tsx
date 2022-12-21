import { EditAdminProduct } from '@/components/screens/admin/products/edit/EditAdminProduct';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductEditPage: NextPageAuth = () => {
	return <EditAdminProduct />;
};

AdminProductEditPage.onlyForAdmin = true;

export default AdminProductEditPage;
