import { Heading } from '@/components/ui/heading/Heading';
import { Meta } from '@/utils/meta/Meta';
import Image from 'next/image';
import { FC } from 'react';

import { OfferProps } from './offer.interface';

export const Offers: FC<OfferProps> = ({ offers }) => {
	return (
		<Meta
			title='Страница спец-предложений!'
			description='На этой странице представлены специальные предложения от нашего магазина!'
		>
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
		</Meta>
	);
};
