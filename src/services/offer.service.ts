import { axiosClassic, instance } from '@/api/interceptors.api';
import { getSpecialOfferApi } from '@/config/api.config';
import { IOffer } from '@/types/offer.types';

export const getFreshOffers = async () => {
	const data = await axiosClassic.get<IOffer[]>(getSpecialOfferApi('fresh'));
	return data.data;
};

export const getAllOffers = async () => {
	const response = await axiosClassic.get<IOffer[]>(getSpecialOfferApi(''));
	return response.data;
};

export const removeOffer = async (offerId: number) => {
	const response = await instance.delete(
		getSpecialOfferApi(`remove/${offerId}`)
	);
	return response.data;
};

export interface CreteOfferDto {
	categoryId: number;

	brandId: number;

	description?: string;

	endDate: string;

	photo: string;
}

export const createOffer = async (dto: CreteOfferDto) => {
	const response = await instance.post(getSpecialOfferApi(''), dto);
	return response.data;
};

export interface UpdateOfferDto {
	categoryId?: number;

	brandId?: number;

	description?: string;

	endDate?: string;

	photo?: string;
}

export const editOffer = async (offerId: number, dto: UpdateOfferDto) => {
	const response = await instance.patch(
		getSpecialOfferApi(`edit/${offerId}`),
		dto
	);
	return response.data;
};

export const getOneOffer = async (offerId: number) => {
	const response = await axiosClassic.get<IOffer>(
		getSpecialOfferApi(`${offerId}`)
	);
	return response.data;
};
