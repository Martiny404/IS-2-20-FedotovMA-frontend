import { AdminCategoryOptions } from '@/components/screens/admin/categories/options/category/AdminCategoryOptions';
import { NextPageAuth } from '@/types/auth.types';

const AdminCategoryOptionsPage: NextPageAuth = () => {
	return <AdminCategoryOptions />;
};

AdminCategoryOptionsPage.onlyForAdmin = true;

export default AdminCategoryOptionsPage;
