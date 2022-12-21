import { NextPageAuth } from '@/types/auth.types';

const AdminBrandsPage: NextPageAuth = () => {
	return <h1>AdminBrandsPage</h1>;
};

AdminBrandsPage.onlyForAdmin = true;

export default AdminBrandsPage;
