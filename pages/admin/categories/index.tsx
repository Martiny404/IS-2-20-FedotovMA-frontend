import { AdminCategories } from '@/components/screens/admin/categories/AdminCategories';
import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesPage: NextPageAuth = () => {
	return <AdminCategories />;
};

AdminCategoriesPage.onlyForAdmin = true;

export default AdminCategoriesPage;
