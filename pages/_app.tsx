import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '../src/utils/createEmotionCache';
import lightTheme from '../src/assets/styles/theme/lightTheme';
import '../src/assets/styles/globals.scss';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { Layout } from '@/components/layout/Layout';
import { QueryClientProvider, Hydrate, QueryClient } from 'react-query';
import { HeadProvider } from '@/providers/head/HeadProvider';

const clientSideEmotionCache = createEmotionCache();

type MyAppProps = AppProps & EmotionCache;

const MyApp = (props: MyAppProps) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
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
					<CacheProvider value={emotionCache}>
						<ThemeProvider theme={lightTheme}>
							<CssBaseline />
							<Layout>
								<Component {...pageProps} />
							</Layout>
						</ThemeProvider>
					</CacheProvider>
				</Hydrate>
			</QueryClientProvider>
		</HeadProvider>
	);
};

export default MyApp;
