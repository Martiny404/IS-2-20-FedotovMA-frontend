import { getAdminUrl } from '@/config/url.config';
import { EDIT_OFFER, GET_ONE_OFFER, REMOVE_OFFER } from '@/constants/queries';
import {
	editOffer,
	getOneOffer,
	removeOffer,
	UpdateOfferDto,
} from '@/services/offer.service';
import { errorHandler } from '@/utils/error-handler';
import { getKeys } from '@/utils/getKeys';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

export const useEditOffer = (setValue: UseFormSetValue<any>) => {
	const { query, push } = useRouter();

	const offerId = String(query.id);

	const { data, refetch } = useQuery(
		GET_ONE_OFFER,
		() => getOneOffer(+offerId),
		{
			onError(e) {
				errorHandler(e);
				push('/admin');
			},
			onSuccess(d) {
				getKeys(d).forEach(key => {
					if (key == 'brand' || key == 'category') {
						setValue(`${key}Id`, d[key].id);
					} else {
						setValue(key, d[key]);
					}
				});
			},
			enabled: !!query.id,
			retry: 1,
		}
	);

	const { mutateAsync: editOfferMutation } = useMutation(
		EDIT_OFFER,
		(dto: UpdateOfferDto) => editOffer(+offerId, dto),
		{
			onSuccess() {
				notification('Акция изменена успешно', 'success', 1500);
				refetch();
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	const { mutateAsync: removeOfferMutation } = useMutation(
		REMOVE_OFFER,
		() => removeOffer(+offerId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Акция удалена успешно', 'success', 1500);
				push(getAdminUrl('offers'));
			},
		}
	);

	return {
		data,
		editOfferMutation,
		removeOfferMutation,
	};
};
