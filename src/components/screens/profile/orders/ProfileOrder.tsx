import { Button } from '@/components/ui/form-elements/Button';
import { Field } from '@/components/ui/form-elements/Field';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Modal } from '@/components/ui/modal';
import { useGetMe } from '@/hooks/data/users/useGetMe';
import { OrderTypes } from '@/types/order/order.types';
import { UserTypes } from '@/types/user.types';
import { parseDate } from '@/utils/parseDate';
import { parseOrderActivated } from '@/utils/parseOrderActivated';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Profile.module.scss';
import { ActivateForm } from './ActivateForm';
import { ProfileOrderProduct } from './ProfileOrderProduct';

export const ProfileOrder: FC<{
	order: UserTypes.Order;
}> = ({ order }) => {
	const [open, setOpen] = useState(false);

	const {
		cancleOrderMutation,
		codeSended,
		sendOrderCodeMutation,
		activateOrderMutation,
	} = useGetMe();

	const activateOrderHandler = (code: string) => {
		activateOrderMutation({
			code,
			orderId: order.id,
		});
	};

	const onSendCode = () => {
		sendOrderCodeMutation(order.id);
	};

	const [modal, setModal] = useState(false);

	const [status, color] = parseOrderStatus(order.orderStatus);

	const [activated, activatedColor] = parseOrderActivated(order.is_activated);

	return (
		<li
			className={clsx(styles.order, {
				[styles.opened]: open,
			})}
		>
			<strong className={styles.orderTitle}>Заказ номер {order.id}</strong>

			<div className={styles.header}>
				<div className={styles.headerInfo}>
					<button onClick={() => setOpen(s => !s)}>
						<MaterialIcon muiName='FaChevronUp' />
					</button>
					<div className={styles.orderInfo}>
						<span>Дата заказа: {parseDate(order.createdAt)}</span>
						<span className={color}>Статус: {status}</span>
						<span className={activatedColor}>{activated}</span>
					</div>
				</div>

				<div className={styles.actionsBtns}>
					<Button
						onClick={() => cancleOrderMutation(order.id)}
						className={styles.cancleOrder}
					>
						Отменить заказ
					</Button>

					{order.orderStatus == OrderTypes.OrderStatus.IN_WAITING && (
						<Button
							disabled={codeSended}
							onClick={onSendCode}
							className={styles.activateBtn}
						>
							{codeSended ? 'Код отправлен' : '						Отправить код активации'}
						</Button>
					)}
				</div>

				<CSSTransition
					in={codeSended}
					classNames='reminder-anim'
					unmountOnExit
					timeout={300}
				>
					<div className={styles.modalWrapper}>
						<Button onClick={() => setModal(true)} variant='outlined'>
							Открыть форму
						</Button>
						<ActivateForm
							opened={modal}
							onClose={() => setModal(false)}
							handler={activateOrderHandler}
						/>
					</div>
				</CSSTransition>
			</div>
			<CSSTransition
				in={open}
				classNames='reminder-anim'
				unmountOnExit
				timeout={300}
			>
				<>
					<Heading style={{ marginBottom: 20 }} headingLevel='h3'>
						Продукты в заказе:
					</Heading>
					<ul className={styles.orderProducts}>
						{order.orderProducts.map(op => (
							<ProfileOrderProduct key={op.id} orderProduct={op} />
						))}
					</ul>
				</>
			</CSSTransition>
		</li>
	);
};
