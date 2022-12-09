import { IOfferSlide } from '@/components/screens/home/special-deals/slider/FreshOffers';
import { getFreshOffers } from '@/services/offer.service';
import { FRESH_OFFERS } from 'constants/queries';
import { useQuery } from 'react-query';

export const useFreshOffers = () => {
	const { data } = useQuery(FRESH_OFFERS, getFreshOffers, {
		select: data =>
			data.map(
				(item): IOfferSlide => ({
					id: item.id,
					description: item.description,
					photo: item.photo,
				})
			),
	});

	return data;
};
