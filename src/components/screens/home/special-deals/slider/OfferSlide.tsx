import { getCatalogUrl } from '@/config/url.config';
import { IOffer } from '@/types/offer.types';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

export const OfferSlide: FC<{ offer: IOffer }> = ({ offer }) => {
	return (
		<Link
			href={getCatalogUrl(
				`categoryId=${offer.category.id}&brandId=${offer.brand.id}&discount=true`
			)}
			style={{
				position: 'relative',
				height: '100%',
				cursor: 'pointer',
				display: 'block',
			}}
		>
			<Image
				fill
				priority
				src={offer.photo}
				alt={offer?.description || 'Special offer'}
			/>
		</Link>
	);
};
