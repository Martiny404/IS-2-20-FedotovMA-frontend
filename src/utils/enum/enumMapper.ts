import { OrderTypes } from '@/types/order/order.types';
import { parseOrderStatus } from '../parseOrderStatus';

export interface IReturnOrderEnumMapper {
	value: OrderTypes.OrderStatus;
	label: string;
}

export const orderEnumMapper = () => {
	return (
		Object.keys(OrderTypes.OrderStatus) as Array<
			keyof typeof OrderTypes.OrderStatus
		>
	).map(key => {
		const label = parseOrderStatus(key as OrderTypes.OrderStatus)[0];
		return {
			value: key as OrderTypes.OrderStatus,
			label,
		};
	});
};
