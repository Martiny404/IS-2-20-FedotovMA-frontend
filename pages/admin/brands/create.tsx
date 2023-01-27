import { AdminCreateBrand } from '@/components/screens/admin/brands/create/AdminCreateBrand';
import { NextPageAuth } from '@/types/auth.types';

const AdminBrandsCreatePage: NextPageAuth = () => {
	return <AdminCreateBrand />;
};

AdminBrandsCreatePage.onlyForAdmin = true;

export default AdminBrandsCreatePage;
