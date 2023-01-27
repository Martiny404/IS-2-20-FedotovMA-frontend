import { Button } from '@/components/ui/form-elements/Button';
import { Modal } from '@/components/ui/modal';
import { useOrder } from '@/hooks/data/order/useOrder';
import { OrderTypes } from '@/types/order/order.types';
import {
	IReturnOrderEnumMapper,
	orderEnumMapper,
} from '@/utils/enum/enumMapper';
import { parseOrderActivated } from '@/utils/parseOrderActivated';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import { FC, useState } from 'react';
import Select from 'react-select';
import styles from '../AdminOrder.module.scss';

export const AdminEditOrder: FC<{ order: OrderTypes.IOrder }> = ({ order }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [status, setStatus] = useState<IReturnOrderEnumMapper>(() => ({
		value: order.orderStatus,
		label: parseOrderStatus(order.orderStatus)[0],
	}));

	const { changeStatusAsync, removeOrderAsync, toggleActiveAsync } = useOrder();

	const options = orderEnumMapper();

	const [orderActivity, color] = parseOrderActivated(order.is_activated);

	const onChange = (opt: any) => {
		setStatus(opt);
	};

	const changeOrderStatus = () => {
		changeStatusAsync({
			orderId: order.id,
			status: status.value,
		});
	};

	const changeOrderActivity = () => {
		toggleActiveAsync(order.id);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const removeOrder = () => {
		removeOrderAsync(order.id);
	};

	return (
		<>
			<Button onClick={handleOpen} className={styles.editBtn}>
				Изменить
			</Button>

			<Modal opened={open} onClose={handleClose}>
				<div className={styles.editWrapper}>
					<div className={styles.edit}>
						<Select onChange={onChange} value={status} options={options} />
						<Button
							className={styles.changeStatusBtn}
							variant='outlined'
							onClick={changeOrderStatus}
						>
							Сменить статус
						</Button>
					</div>
					<div className='hr'></div>
					<div className={styles.edit}>
						<div className={styles.editActivity}>
							<span className={color}>{orderActivity}</span>
							<input
								onChange={changeOrderActivity}
								checked={order.is_activated}
								type='checkbox'
							/>
						</div>
					</div>
					<div className='hr'></div>
					<div className={styles.edit}>
						<Button onClick={removeOrder}>Удалить</Button>
					</div>
				</div>
			</Modal>
		</>
	);
};
