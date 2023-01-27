import { AdminBrands } from '@/components/screens/admin/brands/AdminBrands';
import { NextPageAuth } from '@/types/auth.types';

const AdminBrandsPage: NextPageAuth = () => {
	return <AdminBrands />;
};

AdminBrandsPage.onlyForAdmin = true;

export default AdminBrandsPage;
