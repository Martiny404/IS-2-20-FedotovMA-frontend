import { Meta } from '@/utils/meta/Meta';
import type { NextPage } from 'next';

const NotfoundPage: NextPage = () => {
	return (
		<Meta title='Не найдено'>
			<h1>404</h1>
		</Meta>
	);
};

export default NotfoundPage;
