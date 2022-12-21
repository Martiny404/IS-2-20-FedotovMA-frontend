import { SkeletonLoader } from '@/components/ui/skeleton/SkeletonLoader';
import { FC, useMemo } from 'react';

import styles from '../Admin.module.scss';
import { useMostOrderedProducts } from '@/hooks/data/statistic/useMostOrderedProducts';
import { AdminProduct } from '@/components/ui/admin-product/AdminProduct';

export const TopThreeProducts: FC = () => {
	const { data, isLoading } = useMostOrderedProducts();

	const three = useMemo(() => {
		return data?.slice(0, 3);
	}, [data]);

	if (isLoading) {
		<ul className={styles.block}>
			<SkeletonLoader
				width='100%'
				className={styles.loader}
				height={100}
				count={3}
			/>
		</ul>;
	}

	return (
		<ul className={styles.block}>
			{three?.map(item => (
				<AdminProduct key={item.id} item={item} />
			))}
		</ul>
	);
};
