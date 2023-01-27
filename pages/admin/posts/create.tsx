import { AdminCreatePost } from '@/components/screens/admin/posts/create/AdminCreatePost';
import { NextPageAuth } from '@/types/auth.types';

const AdminPostsCreatePage: NextPageAuth = () => {
	return <AdminCreatePost />;
};

AdminPostsCreatePage.onlyForAdmin = true;

export default AdminPostsCreatePage;
