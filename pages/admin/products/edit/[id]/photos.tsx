import { AdminEditPhotos } from '@/components/screens/admin/orders/edit/AdminEditPhotos';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductEditPagePhotos: NextPageAuth = () => {
	return <AdminEditPhotos />;
};

AdminProductEditPagePhotos.onlyForAdmin = true;

export default AdminProductEditPagePhotos;
