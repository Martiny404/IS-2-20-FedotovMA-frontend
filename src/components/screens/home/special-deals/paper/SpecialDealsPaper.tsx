import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Paper } from '@/components/ui/paper/Paper';

import Link from 'next/link';
import { FC } from 'react';
import styles from './SpecialDealsPaper.module.scss';

export const SpecialDealsPaper: FC = () => {
	return (
		<Paper height='100%'>
			<div className={styles.Mypaper}>
				<Heading className={styles.title} headingLevel='h4'>
					Акции
				</Heading>
				<ul className='simple-list '>
					<li>
						<Link href='/offers/brands'>
							<span className='my-link'>По брендам</span>
						</Link>
					</li>
					<li>
						<Link href='/offers/categories'>
							<span className='my-link'>По категориям</span>
						</Link>
					</li>
				</ul>
				<div className={styles.buttonsWrapper}>
					<button>Все акции</button>
				</div>
				<div className='my-icon'>
					<MaterialIcon muiName='DiscountIcon' />
				</div>
			</div>
		</Paper>
	);
};
