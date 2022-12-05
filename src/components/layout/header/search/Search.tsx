import { MaterialIcon } from '@/components/ui/MaterialIcon';
import { FC, memo } from 'react';
import styles from '../Header.module.scss';

export const Search: FC = memo(() => {
	return (
		<div>
			<button>
				<MaterialIcon muiName='SearchIcon' />
			</button>
			<input type='text' />
		</div>
	);
});

Search.displayName = 'Search';
