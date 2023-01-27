import { AdminEditBrand } from '@/components/screens/admin/brands/edit/AdminEditBrand';
import { NextPageAuth } from '@/types/auth.types';

const AdminBrandsEditPage: NextPageAuth = () => {
	return <AdminEditBrand />;
};

AdminBrandsEditPage.onlyForAdmin = true;

export default AdminBrandsEditPage;
