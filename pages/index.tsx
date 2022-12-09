import { Home } from '@/components/screens/home/Home';
import { useFreshOffers } from '@/hooks/data/offers/useFreshOffers';
import { useGetAllBrands } from '@/hooks/data/brand/useGetAllBrands';
import { useGetAllCategories } from '@/hooks/data/category/useGetAllCategories';
import { useMostOrderedProducts } from '@/hooks/data/statistic/useMostOrderedProducts';
import { getAllBrands } from '@/services/brand.service';
import { getAllCategories } from '@/services/category.service';
import { getFreshOffers } from '@/services/offer.service';
import { getMostOrdered } from '@/services/statistics.service';
import {
	FRESH_OFFERS,
	GET_ALL_BRANDS,
	GET_ALL_CATEGORIES,
	GET_MOST_ORDERED_PRODUCTS,
} from 'constants/queries';

import type { GetStaticProps, NextPage } from 'next';
import { dehydrate, QueryClient } from 'react-query';

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(FRESH_OFFERS, getFreshOffers);
	await queryClient.prefetchQuery(GET_ALL_CATEGORIES, getAllCategories);
	await queryClient.prefetchQuery(GET_MOST_ORDERED_PRODUCTS, getMostOrdered);
	await queryClient.prefetchQuery(GET_ALL_BRANDS, getAllBrands);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
};

const HomePage: NextPage = () => {
	const offers = useFreshOffers();
	const categories = useGetAllCategories();
	const mostOrdered = useMostOrderedProducts();
	const brands = useGetAllBrands();
	return (
		<Home
			offers={offers || []}
			categories={categories || []}
			mostOrdered={mostOrdered || []}
			brands={brands || []}
		/>
	);
};

export default HomePage;
