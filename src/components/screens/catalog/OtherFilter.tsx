import { MaterialIcon } from '@/components/ui/MaterialIcon';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Catalog.module.scss';
import { CatalogFilter } from './Filter';

export interface OtherCatalogFilter {
	name: string;
	value: any;
}

export interface OtherCatalogActions {
	checked: (v: any) => boolean;
	onChange: (v: any) => void;
}

export interface OtherCatalogFilterProps extends OtherCatalogActions {
	items: OtherCatalogFilter[];
	title: string;
}

export const OtherFilter: FC<OtherCatalogFilterProps> = ({
	checked,
	items,
	onChange,
	title,
}) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={clsx(styles.filter, {
				[styles.opened]: open,
			})}
		>
			<button className={styles.filterBtn} onClick={() => setOpen(s => !s)}>
				<MaterialIcon muiName='FaChevronUp' />
				<span>{title}</span>
			</button>
			<CSSTransition
				in={open}
				classNames='reminder-anim'
				unmountOnExit
				timeout={300}
			>
				<div className={styles.filterValues}>
					{items.map((v, i) => (
						<label key={`${v.value}-${i}`}>
							<input
								checked={checked(v.value)}
								onChange={() => onChange(v.value)}
								type='radio'
								radioGroup={title}
							/>
							<span>{v.name}</span>
						</label>
					))}
				</div>
			</CSSTransition>
		</div>
	);
};
