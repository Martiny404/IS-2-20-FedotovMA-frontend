import { getFreshOffers } from '@/services/offer.service';
import { FRESH_OFFERS } from 'constants/queries';
import { useQuery } from 'react-query';

export const useFreshOffers = () => {
	const { data } = useQuery(FRESH_OFFERS, getFreshOffers);

	return data || [];
};
