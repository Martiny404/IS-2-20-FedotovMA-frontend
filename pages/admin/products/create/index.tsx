import { AdminProductsCreate } from '@/components/screens/admin/products/create/AdminProductsCreate';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductCreatePage: NextPageAuth = () => {
	return <AdminProductsCreate />;
};

AdminProductCreatePage.onlyForAdmin = true;

export default AdminProductCreatePage;
