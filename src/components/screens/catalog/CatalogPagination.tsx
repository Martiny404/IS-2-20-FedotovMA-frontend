import { Button } from '@/components/ui/form-elements/Button';
import { MaterialIcon } from '@/components/ui/MaterialIcon';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useRef, useState } from 'react';
import styles from './Catalog.module.scss';

export const CatalogPagination: FC<{ count: number }> = ({ count }) => {
	const { push, query } = useRouter();

	const currentPage = query.page ? +query.page : 1;

	const pagesCount = Math.ceil(count / 9);

	const ref = useRef<number>(currentPage);

	const nextPage = () => {
		if (ref.current + 1 > pagesCount) return;

		ref.current += 1;
		push({
			query: {
				...query,
				page: ref.current,
			},
		});
	};

	const prevPage = () => {
		if (ref.current == 1) return;
		ref.current -= 1;
		push({
			query: {
				...query,
				page: ref.current,
			},
		});
	};

	return (
		<div className={styles.pag}>
			<Button onClick={prevPage} className={styles.pagItem}>
				<MaterialIcon muiName='ChevronLeft' />
			</Button>
			<Button onClick={nextPage} className={styles.pagItem}>
				<MaterialIcon muiName='ChevronRight' />
			</Button>
		</div>
	);
};
