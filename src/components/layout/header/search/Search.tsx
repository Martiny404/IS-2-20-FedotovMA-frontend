import { SearchField } from '@/components/ui/search-field/SearchField';
import { useOutside } from '@/hooks/useOutside';
import { FC, memo, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { SearchList } from './search-list/SearchList';
import styles from './Search.module.scss';

export const Search: FC = memo(() => {
	const { isShow: open, setIsShow: setOpen, ref } = useOutside(true);

	const closeList = () => {
		setOpen(false);
	};

	return (
		<div ref={ref} className={styles.wrapper}>
			<SearchField searchTerm='' handleSearch={() => {}} />
			<CSSTransition
				in={open}
				timeout={800}
				unmountOnExit
				classNames='reminder-anim'
			>
				<SearchList closeList={closeList} />
			</CSSTransition>
		</div>
	);
});

Search.displayName = 'Search';
