import { AdminCreateCategory } from '@/components/screens/admin/categories/create/AdminCreateCategory';
import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesCreatePage: NextPageAuth = () => {
	return <AdminCreateCategory />;
};

AdminCategoriesCreatePage.onlyForAdmin = true;

export default AdminCategoriesCreatePage;
