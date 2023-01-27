import { AdminEditPhotos } from '@/components/screens/admin/products/edit/photos/AdminEditPhotos';
import { NextPageAuth } from '@/types/auth.types';

const AdminProductEditPagePhotos: NextPageAuth = () => {
	return <AdminEditPhotos />;
};

AdminProductEditPagePhotos.onlyForAdmin = true;

export default AdminProductEditPagePhotos;
