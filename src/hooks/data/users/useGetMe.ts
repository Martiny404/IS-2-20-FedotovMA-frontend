import {
	ACTIVATE_ORDER,
	ADD_VALIDATION_CODE,
	CANCLE_ORDER,
	GET_USER_ME,
	SEND_ACTIVATION_CODE,
	UPDATE_USER_INFO,
} from '@/constants/queries';
import {
	activateOrder,
	ActivateOrderDto,
	cancleOrder,
	sendCode,
} from '@/services/order.service';
import {
	addValidationCode,
	getUserMe,
	updateUserInfo,
	UpdateUserInfoDto,
} from '@/services/user.service';
import { errorHandler } from '@/utils/error-handler';
import { notification } from '@/utils/notification';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';

export const useGetMe = () => {
	const { push } = useRouter();

	const [success, setSuccess] = useState(false);

	const { data, refetch, isLoading } = useQuery(
		GET_USER_ME,
		() => getUserMe(),
		{
			onError(e) {
				errorHandler(e);
				push('/');
			},
		}
	);

	const { mutateAsync: addValidationCodeMutation, isLoading: codeLoading } =
		useMutation(ADD_VALIDATION_CODE, () => addValidationCode(), {
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				setSuccess(true);
			},
		});

	const { mutateAsync: updateUserMutation } = useMutation(
		UPDATE_USER_INFO,
		(dto: UpdateUserInfoDto) => updateUserInfo(dto),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Профиль изменен успешно!', 'success', 1800);
				refetch();
			},
		}
	);

	const { mutateAsync: cancleOrderMutation } = useMutation(
		CANCLE_ORDER,
		(orderId: number) => cancleOrder(orderId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				notification('Заказ отменен успешно!', 'success', 1800);
				refetch();
			},
		}
	);

	const [codeSended, setCodeSended] = useState(false);

	const { mutateAsync: sendOrderCodeMutation } = useMutation(
		SEND_ACTIVATION_CODE,
		(orderId: number) => sendCode(orderId),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				setCodeSended(true);
			},
		}
	);

	const { mutateAsync: activateOrderMutation } = useMutation(
		ACTIVATE_ORDER,
		(dto: ActivateOrderDto) => activateOrder(dto),
		{
			onError(e) {
				errorHandler(e);
			},
			onSuccess() {
				refetch();
				setCodeSended(false);
			},
		}
	);

	return {
		data,
		isLoading,
		success,
		setSuccess,
		addValidationCodeMutation,
		updateUserMutation,
		codeLoading,
		cancleOrderMutation,
		sendOrderCodeMutation,
		codeSended,
		setCodeSended,
		activateOrderMutation,
	};
};
