import { NextPageAuth } from '@/types/auth.types';

const AdminClientPage: NextPageAuth = () => {
	return <h1>AdminClientPage</h1>;
};

AdminClientPage.onlyForAdmin = true;

export default AdminClientPage;
