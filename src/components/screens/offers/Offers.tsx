import { Heading } from '@/components/ui/heading/Heading';
import Image from 'next/image';
import { FC } from 'react';

import { OfferProps } from './offer.interface';

export const Offers: FC<OfferProps> = ({ offers }) => {
	return (
		<>
			<Heading headingLevel='h1'>Акции</Heading>

			<ul>
				{offers.map(offer => (
					<li key={offer.id}>
						<div>
							<Image
								width={200}
								height={180}
								src={offer.photo}
								alt={offer.description || 'Скидка'}
							/>
						</div>
						<p>{offer.description}</p>
						<div>{offer.category.name}</div>
						<div>{offer.brand.name}</div>
					</li>
				))}
			</ul>
		</>
	);
};
