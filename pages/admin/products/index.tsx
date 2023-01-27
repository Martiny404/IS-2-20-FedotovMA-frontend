import { AdminProducts } from '@/components/screens/admin/products/AdminProducts';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductPage: NextPageAuth = () => {
	return <AdminProducts />;
};

AdminProductPage.onlyForAdmin = true;

export default AdminProductPage;
