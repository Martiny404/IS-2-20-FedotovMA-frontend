import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/styles/vars.css';
import '@/assets/styles/globals.scss';
import '@/assets/styles/slider.scss';
import '@/assets/styles/helpers.scss';
import '@/assets/styles/transitions.scss';

import { AppProps } from 'next/dist/shared/lib/router/router';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';

import { Provider } from 'react-redux';
import { store } from '@/store/store';

import { MainProvider } from '@/providers/MainProvider';
import { ComponentAuthFields } from '@/types/auth.types';

type AppPropsType = AppProps & ComponentAuthFields;

const MyApp = (props: AppPropsType) => {
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
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Hydrate state={pageProps.dehydratedState}>
					<MainProvider Component={Component}>
						<Component {...pageProps} />
					</MainProvider>
				</Hydrate>
			</QueryClientProvider>
		</Provider>
	);
};

export default MyApp;
