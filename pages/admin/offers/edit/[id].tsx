import { EditOffer } from '@/components/screens/admin/offers/edit/EditOffer';
import { NextPageAuth } from '@/types/auth.types';

const AdminOffersEditPage: NextPageAuth = () => {
	return <EditOffer />;
};

AdminOffersEditPage.onlyForAdmin = true;

export default AdminOffersEditPage;
