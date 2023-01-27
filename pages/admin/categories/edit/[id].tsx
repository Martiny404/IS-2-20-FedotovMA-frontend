import { AdminEditCategory } from '@/components/screens/admin/categories/edit/AdminEditCategory';
import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesEditPage: NextPageAuth = () => {
	return <AdminEditCategory />;
};

AdminCategoriesEditPage.onlyForAdmin = true;

export default AdminCategoriesEditPage;
