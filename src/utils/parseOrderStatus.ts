import { OrderTypes } from '@/types/order/order.types';

export function parseOrderStatus(status: OrderTypes.OrderStatus) {
	switch (status) {
		case OrderTypes.OrderStatus.CANCELLED:
			return ['Отменен', 'red'];
		case OrderTypes.OrderStatus.COMPLETED:
			return ['Завершен', 'green'];
		case OrderTypes.OrderStatus.IN_WAITING:
			return ['В ожидании', 'yellow'];
		case OrderTypes.OrderStatus.ON_THE_WAY:
			return ['В пути', 'blue'];
		case OrderTypes.OrderStatus.WAITING_FOR_PAYMENT_OR_RECEIPT:
			return ['В ожидании оплаты или получения', 'violet'];
	}
}
