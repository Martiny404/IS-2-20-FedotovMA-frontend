import { AdminProductsOptions } from '@/components/screens/admin/products/edit/options/AdminProductsOptions';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductEditPageOptions: NextPageAuth = () => {
	return <AdminProductsOptions />;
};

AdminProductEditPageOptions.onlyForAdmin = true;

export default AdminProductEditPageOptions;
