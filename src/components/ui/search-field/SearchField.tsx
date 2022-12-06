import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { ChangeEvent, createRef, FC, memo } from 'react';
import styles from './SearchField.module.scss';

export interface ISearch {
	searchTerm: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<ISearch> = ({ handleSearch, searchTerm }) => {
	const ref = createRef<HTMLDivElement>();

	const onFocus = () => {
		if (ref.current) {
			ref.current.classList.add(styles.animated);
		}
	};

	const onBlur = () => {
		if (ref.current) {
			ref.current.classList.remove(styles.animated);
		}
	};

	return (
		<div ref={ref} className={styles.search}>
			<MaterialIcon muiName='SearchIcon' />

			<input onFocus={onFocus} onBlur={onBlur} type='text' />
		</div>
	);
};
