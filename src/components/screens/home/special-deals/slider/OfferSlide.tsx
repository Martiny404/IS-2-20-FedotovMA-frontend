import { getOfferUrl } from '@/config/url.config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './FreshOffers.module.scss';
export const OfferSlide: FC<{ id: number; src: string; alt: string }> = ({
	id,
	src,
	alt,
}) => {
	const { push } = useRouter();

	return (
		<div
			style={{ position: 'relative', height: '100%', cursor: 'pointer' }}
			onClick={() => push(getOfferUrl(id))}
		>
			<Image fill priority src={src} alt={alt} />
		</div>
	);
};
