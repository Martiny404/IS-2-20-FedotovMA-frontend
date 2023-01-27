import { SearchField } from '@/components/ui/search-field/SearchField';
import { useSearch } from '@/hooks/data/useSearch';
import { useOutside } from '@/hooks/useOutside';
import { useOutsideWithCallback } from '@/hooks/useOutsideWithCallback';
import { FC, memo, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SearchList } from './search-list/SearchList';
import styles from './Search.module.scss';

export const Search: FC = memo(() => {
	const { data, handleSearch, searchTerm, setDebounced } = useSearch();
	const { ref } = useOutsideWithCallback(() => setDebounced(''));

	const closeList = () => {
		setDebounced('');
	};

	return (
		<div ref={ref} className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

			<CSSTransition
				in={!!data}
				unmountOnExit
				timeout={300}
				classNames='reminder-anim'
			>
				<SearchList closeList={closeList} products={data || []} />
			</CSSTransition>
		</div>
	);
});

Search.displayName = 'Search';
