import { NextPageAuth } from '@/types/auth.types';

const AdminBrandsEditPage: NextPageAuth = () => {
	return <h1>AdminBrandsEditPage</h1>;
};

AdminBrandsEditPage.onlyForAdmin = true;

export default AdminBrandsEditPage;
