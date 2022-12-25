import { CreateOffer } from '@/components/screens/admin/offers/create/CreateOffer';
import { NextPageAuth } from '@/types/auth.types';

const AdminOffersCreatePage: NextPageAuth = () => {
	return <CreateOffer />;
};

AdminOffersCreatePage.onlyForAdmin = true;

export default AdminOffersCreatePage;
