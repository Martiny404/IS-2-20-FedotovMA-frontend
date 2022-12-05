import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import '@/assets/styles/vars.css';
import '@/assets/styles/globals.scss';
import '@/assets/styles/slider.scss';
import '@/assets/styles/helpers.scss';
import '@/assets/styles/transitions.scss';

import { AppProps } from 'next/dist/shared/lib/router/router';
import { Layout } from '@/components/layout/Layout';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';
import { HeadProvider } from '@/providers/head/HeadProvider';

type MyAppProps = AppProps;

const MyApp = (props: MyAppProps) => {
	const { Component, pageProps } = props;
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			})
	);

	return (
		<HeadProvider>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Hydrate>
			</QueryClientProvider>
		</HeadProvider>
	);
};

export default MyApp;
