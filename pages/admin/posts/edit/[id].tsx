import { AdminEditPost } from '@/components/screens/admin/posts/edit/AdminEditPost';
import { NextPageAuth } from '@/types/auth.types';

const AdminPostsEditPage: NextPageAuth = () => {
	return <AdminEditPost />;
};

AdminPostsEditPage.onlyForAdmin = true;

export default AdminPostsEditPage;
