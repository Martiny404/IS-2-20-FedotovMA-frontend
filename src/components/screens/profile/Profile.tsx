import { useGetMe } from '@/hooks/data/users/useGetMe';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';

export const Profile: FC = () => {
	const { data: me } = useGetMe();

	return (
		<Meta
			title='Страница профиля пользователя'
			description='Страница с информацией пользователя'
		></Meta>
	);
};
