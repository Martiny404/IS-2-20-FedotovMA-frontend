import { Layout } from '@/components/layout/Layout';
import { ComponentAuthFields } from '@/types/auth.types';
import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './auth/AuthProvider';
import { HeadProvider } from './head/HeadProvider';

export const MainProvider: FC<PropsWithChildren<ComponentAuthFields>> = ({
	Component,
	children,
}) => {
	return (
		<HeadProvider>
			<ToastContainer />
			<AuthProvider Component={Component}>
				<Layout>{children}</Layout>
			</AuthProvider>
		</HeadProvider>
	);
};
