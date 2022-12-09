import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import { ComponentAuthFields } from '@/shared/types/auth.types';

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<ComponentAuthFields>> = ({
	children,
	Component: { onlyForAdmin, onlyForUsers },
}) => {
	const { user } = useAuth();
	const { checkAuth, logout } = useActions();
	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get('accessToken');
		if (accessToken) checkAuth();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		const refreshToken = Cookies.get('clientRefreshToken');
		if (!refreshToken && user) logout();
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
