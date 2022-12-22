import { NextPageAuth } from '@/types/auth.types';

const AdminCategoriesCreatePage: NextPageAuth = () => {
	return <h1>AdminCategoriesCreatePage</h1>;
};

AdminCategoriesCreatePage.onlyForAdmin = true;

export default AdminCategoriesCreatePage;
