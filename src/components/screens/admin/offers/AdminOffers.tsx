import { Heading } from '@/components/ui/heading/Heading';
import { useAllOffers } from '@/hooks/data/offers/useAllOffers';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { AdminNavigation } from '../navigation/AdminNavigation';
import styles from '../AdminPublic.module.scss';
import Link from 'next/link';
import { getAdminUrl } from '@/config/url.config';
import { BCCard } from '@/components/ui/bc-card/BCCard';

export const AdminOffers: FC = () => {
	const offers = useAllOffers();

	return (
		<Meta title='Страница акций'>
			<AdminNavigation />

			<Link className='my-link' href={getAdminUrl('offers/create')}>
				Создать акцию
			</Link>

			{!offers || offers.length == 0 ? (
				<Heading headingLevel='h1'>Список акций пуст!</Heading>
			) : (
				<ul className={styles.list}>
					{offers.map(offer => {
						const name = offer.category.name + ' & ' + offer.brand.name;

						return (
							<BCCard
								type='offer'
								key={offer.id}
								item={{
									id: offer.id,
									name,
									image: offer.photo,
									endDate: offer.endDate,
								}}
								forAdmin={true}
							/>
						);
					})}
				</ul>
			)}
		</Meta>
	);
};
