import { Heading } from '@/components/ui/heading/Heading';
import { Meta } from '@/utils/meta/Meta';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Offers.module.scss';

import { IOffer } from '@/types/offer.types';
import { getCatalogUrl } from '@/config/url.config';
import Link from 'next/link';

export interface OfferProps {
	offers: IOffer[];
	type: 'all' | 'category' | 'brand';
}

export const Offers: FC<OfferProps> = ({ offers, type = 'all' }) => {
	const createLink = (categoryId: number, brandId: number) => {
		switch (type) {
			case 'brand':
				return getCatalogUrl(`brandId=${brandId}&discount=true`);
			case 'category':
				return getCatalogUrl(`categoryId=${categoryId}&discount=true`);
			default:
				return getCatalogUrl(
					`categoryId=${categoryId}&brandId=${brandId}&discount=true`
				);
		}
	};

	return (
		<Meta
			title='Страница акций'
			description='На этой странице представлены специальные предложения от нашего магазина!'
		>
			<Heading style={{ marginBottom: 25 }} headingLevel='h1'>
				Акции
			</Heading>

			<ul className={styles.list}>
				{offers.map(offer => (
					<li className={styles.item} key={offer.id}>
						<Link href={createLink(offer.category.id, offer.brand.id)}>
							<div className={styles.img}>
								<Image
									width={200}
									height={180}
									src={offer.photo}
									alt={offer.description || 'Скидка'}
								/>
							</div>
						</Link>
						<div className={styles.text}>
							<strong>Заголовок: {offer.description}</strong>
							{type == 'all' && (
								<>
									<strong>{offer.category.name}</strong>
									<strong>{offer.brand.name}</strong>
								</>
							)}
							{type == 'brand' && <strong>Бренд: {offer.brand.name}</strong>}
							{type == 'category' && (
								<strong>Категория: {offer.category.name}</strong>
							)}
						</div>
					</li>
				))}
			</ul>
		</Meta>
	);
};
