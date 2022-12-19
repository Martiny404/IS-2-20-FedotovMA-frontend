import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { ComponentAuthFields } from '@/shared/types/auth.types';
import { notification } from '@/utils/notification';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<ComponentAuthFields>> = ({
	children,
	Component: { onlyForAdmin, onlyForUsers },
}) => {
	const { user } = useAuth();
	const { checkAuth, logout } = useActions();
	const { pathname, push } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) checkAuth();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('clientRefreshToken');
		if (!refreshToken && user) {
			logout();
			notification(
				'Вас выкинуло из системы, время сессии подошло к концу!',
				'error',
				2000
			);
		}
	}, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

	return !onlyForAdmin && !onlyForUsers ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ onlyForAdmin, onlyForUsers }}>
			{children}
		</DynamicCheckRole>
	);
};

export default AuthProvider;
