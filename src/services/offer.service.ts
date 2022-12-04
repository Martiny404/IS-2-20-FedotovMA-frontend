import { getSpecialOfferApi } from '@/config/api.config';
import { IOffer } from '@/types/offer.types';
import axios from 'axios';

export const getFreshOffers = async () => {
	const data = await axios.get<IOffer[]>(getSpecialOfferApi('fresh'));
	return data.data;
};
