import { Button } from '@/components/ui/form-elements/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Paper } from '@/components/ui/paper/Paper';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import styles from './SpecialDealsPaper.module.scss';

export const SpecialDealsPaper: FC = () => {
	const router = useRouter();
	return (
		<Paper height='100%'>
			<div className={styles.Mypaper}>
				<Heading className={styles.title} headingLevel='h4'>
					Акции
				</Heading>
				<div className={styles.buttonsWrapper}>
					<Link href='/offers' className='my-link'>
						Все акции
					</Link>
				</div>
				<div className='my-icon'>
					<MaterialIcon muiName='DiscountIcon' />
				</div>
			</div>
		</Paper>
	);
};
