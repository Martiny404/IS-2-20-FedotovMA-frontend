import { CREATE_OFFER } from '@/constants/queries';
import { createOffer, CreteOfferDto } from '@/services/offer.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useMutation } from 'react-query';

export const useCreateOffer = () => {
	const { mutateAsync: createOfferMutation } = useMutation(
		CREATE_OFFER,
		(dto: CreteOfferDto) => createOffer(dto),
		{
			onSuccess() {
				notification('Акция создана успешно!', 'success', 1300);
			},
			onError(e) {
				errorHandler(e);
			},
		}
	);

	return {
		createOfferMutation,
	};
};
