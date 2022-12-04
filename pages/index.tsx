import { Home } from '@/components/screens/home/Home';
import { useFreshOffers } from '@/hooks/data/useFreshOffers';
import { useGetAllCategories } from '@/hooks/data/useGetAllCategories';
import { getAllCategories } from '@/services/category.service';
import { getFreshOffers } from '@/services/offer.service';
import { FRESH_OFFERS, GET_ALL_CATEGORIES } from 'constants/queries';

import type { GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(FRESH_OFFERS, getFreshOffers);
	await queryClient.prefetchQuery(GET_ALL_CATEGORIES, getAllCategories);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const HomePage: NextPage = () => {
	const offers = useFreshOffers();
	const categories = useGetAllCategories();
	return <Home offers={offers || []} categories={categories || []} />;
};

export default HomePage;
