import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { Option } from '@/types/option.types';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Catalog.module.scss';

export interface CatalogFilter {
	option: Option;
	checked: (v: string, l: string) => boolean;
	onChange: (v: string, l: string) => void;
}

export const Filter: FC<CatalogFilter> = ({ option, checked, onChange }) => {
	const [open, setOpen] = useState(false);
	return (
		<div
			className={clsx(styles.filter, {
				[styles.opened]: open,
			})}
		>
			<button className={styles.filterBtn} onClick={() => setOpen(s => !s)}>
				<MaterialIcon muiName='FaChevronUp' />
				<span>{option.optionName}</span>
			</button>
			<CSSTransition
				in={open}
				classNames='reminder-anim'
				unmountOnExit
				timeout={300}
			>
				<div className={styles.filterValues}>
					{option.values.map(v => (
						<label key={v.id}>
							<input
								checked={checked(v.value, option.optionName)}
								onChange={() => onChange(v.value, option.optionName)}
								type='checkbox'
							/>
							<span>{v.value}</span>
						</label>
					))}
				</div>
			</CSSTransition>
		</div>
	);
};
