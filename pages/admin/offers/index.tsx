import { AdminOffers } from '@/components/screens/admin/offers/AdminOffers';
import { NextPageAuth } from '@/types/auth.types';

const AdminOffersPage: NextPageAuth = () => {
	return <AdminOffers />;
};

AdminOffersPage.onlyForAdmin = true;

export default AdminOffersPage;
