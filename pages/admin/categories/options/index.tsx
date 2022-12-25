import { AdminCategoriesOptions } from '@/components/screens/admin/categories/options/public/AdminCategoriesOptions';
import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesOptionsPage: NextPageAuth = () => {
	return <AdminCategoriesOptions />;
};

AdminCategoriesOptionsPage.onlyForAdmin = true;

export default AdminCategoriesOptionsPage;
