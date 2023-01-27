import { getAllOffers } from '@/services/offer.service';
import { GET_OFFERS } from 'constants/queries';
import { useQuery } from 'react-query';

export const useAllOffers = () => {
	const { data } = useQuery(GET_OFFERS, getAllOffers);

	return data;
};
