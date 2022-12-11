import { SkeletonLoader } from '@/components/ui/skeleton/SkeletonLoader';
import { useMostOrderedProducts } from '@/hooks/data/statistic/useMostOrderedProducts';
import { FC, useMemo } from 'react';
import { TopProduct } from './TopProduct';
import styles from '../Admin.module.scss';

export const TopThreeProducts: FC = () => {
	const { data: mostOrdered, isLoading: isMostOrderedLoaing } =
		useMostOrderedProducts();

	const three = useMemo(() => {
		return mostOrdered?.slice(0, 3);
	}, [mostOrdered]);

	if (isMostOrderedLoaing) {
		<SkeletonLoader
			width='100%'
			className={styles.loader}
			height={100}
			count={3}
		/>;
	}

	return (
		<ul className={styles.block}>
			{three?.map(item => (
				<TopProduct key={item.id} item={item} />
			))}
		</ul>
	);
};
