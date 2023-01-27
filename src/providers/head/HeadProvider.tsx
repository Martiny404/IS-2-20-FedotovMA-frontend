import Head from 'next/head';

import { FC, PropsWithChildren } from 'react';

import { FavIcons } from './Favicons';

export const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='	width=device-width, initial-scale=1.0' />
				<FavIcons />
				<meta name='theme-color' content='#181b1e' />
				<meta name='msapplication-navbutton-color' content='#181b1e' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#181b1e' />
			</Head>
			{children}
		</>
	);
};
