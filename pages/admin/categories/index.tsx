import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesPage: NextPageAuth = () => {
	return <h1>AdminCategoriesPage</h1>;
};

AdminCategoriesPage.onlyForAdmin = true;

export default AdminCategoriesPage;
