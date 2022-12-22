import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesEditPage: NextPageAuth = () => {
	return <h1>AdminCategoriesEditPage</h1>;
};

AdminCategoriesEditPage.onlyForAdmin = true;

export default AdminCategoriesEditPage;
