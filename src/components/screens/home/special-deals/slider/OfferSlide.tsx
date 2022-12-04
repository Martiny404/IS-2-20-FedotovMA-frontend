//import { getOfferUrl } from '@/cfg/url.config';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useCallback } from 'react';

export const OfferSlide: FC<{ id: number; src: string; alt: string }> = ({
	id,
	src,
	alt,
}) => {
	const { push } = useRouter();

	const handleClick = useCallback(() => {
		push('/offers/' + id);
	}, [push, id]);

	return (
		<div
			style={{ position: 'relative', height: '100%', cursor: 'pointer' }}
			onClick={handleClick}
		>
			<Image fill priority src={src} alt={alt} />
		</div>
	);
};
