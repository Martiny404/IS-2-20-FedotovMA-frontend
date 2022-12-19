import { useGetMe } from '@/hooks/data/users/useGetMe';
import { FC } from 'react';

export const Profile: FC = () => {
	const { data: me } = useGetMe();

	return <div>{JSON.stringify(me)}</div>;
};
