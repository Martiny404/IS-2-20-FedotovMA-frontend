import clsx from 'clsx';
import { FC } from 'react';
import styles from './AdminProducts.module.scss';

interface IAdminPagination {
	pages: number[];
	onChange: (p: number) => void;
	page: number;
}

export const AdminProductsPagination: FC<IAdminPagination> = ({
	onChange,
	pages,
	page,
}) => {
	return (
		<ul className={styles.pag}>
			{pages.map(p => (
				<li key={p}>
					<button
						className={clsx('pag-item', {
							'pag-item-active': p === page,
						})}
						onClick={() => onChange(p)}
					>
						{p}
					</button>
				</li>
			))}
		</ul>
	);
};
