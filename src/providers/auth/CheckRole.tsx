import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/hooks/useAuth';

import { ComponentAuthFields } from '@/shared/types/auth.types';

const CheckRole: FC<PropsWithChildren<ComponentAuthFields>> = ({
	children,
	Component: { onlyForAdmin, onlyForUsers },
}) => {
	const { user } = useAuth();

	const router = useRouter();

	const Children = () => <>{children}</>;

	if (user?.role === 'admin') return <Children />;

	if (onlyForAdmin) {
		router.pathname !== '/404' && router.replace('/404');
		return null;
	}

	const isUser = user && user.role == 'user';

	if (isUser && onlyForUsers) return <Children />;
	else {
		router.pathname !== '/auth' && router.replace('/auth');
		return null;
	}
};

export default CheckRole;
