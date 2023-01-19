import { Offers } from '@/components/screens/offers/Offers';
import { GET_OFFERS } from '@/constants/queries';
import { useAllOffers } from '@/hooks/data/offers/useAllOffers';
import { getAllOffers } from '@/services/offer.service';
import type { GetStaticProps, NextPage } from 'next';

import { dehydrate, QueryClient } from 'react-query';

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(GET_OFFERS, getAllOffers);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
		revalidate: 10,
	};
};

const OffersPage: NextPage = () => {
	const offers = useAllOffers();
	return <Offers offers={offers || []} />;
};

export default OffersPage;
