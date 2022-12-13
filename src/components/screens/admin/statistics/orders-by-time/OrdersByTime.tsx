import { DatePicker } from '@/components/ui/date-picker/DatePicker';
import { useGetOrdersByTime } from '@/hooks/data/statistic/useGetOrdersByTime';
import { useRouter } from 'next/router';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from '../Admin.module.scss';
import { OrderByTimeList } from './list/OrderByTimeList';

export const OrdersByTime: FC = () => {
	const [start, setStart] = useState('');
	const [end, setEnd] = useState('');
	const { data, isFetched, refetch } = useGetOrdersByTime(start, end);

	useEffect(() => {
		if (start !== '' && end !== '') {
			refetch();
		}
	}, [start, end, refetch]);

	const changeStart = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setStart(e.target.value);
	}, []);
	const changeEnd = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setEnd(e.target.value);
	}, []);

	return (
		<div className={styles.ordersByTime}>
			<div className={styles.inputs}>
				<DatePicker value={start} onChange={changeStart} />
				<DatePicker value={end} onChange={changeEnd} />
			</div>

			<CSSTransition
				in={isFetched}
				timeout={700}
				unmountOnExit
				classNames='orders-anim'
			>
				<OrderByTimeList items={data || []} />
			</CSSTransition>
		</div>
	);
};
