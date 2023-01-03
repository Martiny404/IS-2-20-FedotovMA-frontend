import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { UserTypes } from '@/types/user.types';
import { parseDate } from '@/utils/parseDate';
import { parseOrderActivated } from '@/utils/parseOrderActivated';
import { parseOrderStatus } from '@/utils/parseOrderStatus';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Profile.module.scss';
import { ProfileOrderProduct } from './ProfileOrderProduct';

export const ProfileOrder: FC<{
	order: UserTypes.Order;
	handler: (orderId: number) => void;
}> = ({ order, handler }) => {
	const [open, setOpen] = useState(false);

	const [status, color] = parseOrderStatus(order.orderStatus);

	const [activated, activatedColor] = parseOrderActivated(order.is_activated);

	return (
		<li
			className={clsx(styles.order, {
				[styles.opened]: open,
			})}
		>
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

				<Button
					onClick={() => handler(order.id)}
					className={styles.cancleOrder}
				>
					Отменить заказ
				</Button>
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
