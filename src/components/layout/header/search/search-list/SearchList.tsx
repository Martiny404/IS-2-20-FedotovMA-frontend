import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import { FC } from 'react';
import styles from '../Search.module.scss';

export const SearchList: FC<{ closeList: () => void }> = ({ closeList }) => {
	return (
		<ul className={styles.list}>
			<div className={styles.listTitle}>
				<span>По запросу найдено:</span>
				<button onClick={closeList}>
					<MaterialIcon muiName='MdClose' />
				</button>
			</div>
			<div style={{ marginBottom: 10 }} className='hr'></div>
			<li className={styles.listItem}>
				<Link href='/'>
					<span>macbook air m2</span>
				</Link>
			</li>
		</ul>
	);
};
