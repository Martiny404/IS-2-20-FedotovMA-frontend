import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { ChangeEvent, FC } from 'react';
import styles from './SearchField.module.scss';

export interface ISearch {
	searchTerm: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchField: FC<ISearch> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon muiName='SearchIcon' />
			<input value={searchTerm} onChange={handleSearch} type='text' />
		</div>
	);
};
