import { AdminStatistics } from '@/components/screens/admin/statistics/AdminStatistics';

import { NextPageAuth } from '@/types/auth.types';

const AdminHomePage: NextPageAuth = () => {
	return <AdminStatistics />;
};

AdminHomePage.onlyForAdmin = true;

export default AdminHomePage;
