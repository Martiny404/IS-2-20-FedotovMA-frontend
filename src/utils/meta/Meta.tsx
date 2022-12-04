import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import logo from '@/assets/images/logo.svg';

import { siteName, titleMerge } from '@/config/seo.config';

import { cleanText } from './strings/cleanText';

import { ISeo } from './meta.interface';

export const Meta: FC<PropsWithChildren<ISeo>> = ({
	title,
	image,
	description,
	children,
}) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp='headline'>{titleMerge(title)}</title>
				{description ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content={cleanText(description, 152)}
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={titleMerge(title)} />
						<meta property='og:url' content={currentUrl} />
						<meta property='og:image' content={image || logo} />
						<meta property='og:site_name' content={siteName} />
						<meta
							property='og:description'
							content={cleanText(description, 197)}
						/>
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	);
};
