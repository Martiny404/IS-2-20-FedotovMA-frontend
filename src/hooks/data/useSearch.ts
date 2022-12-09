import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { getBySearchTerm } from '@/services/product.service';

import { useDebounce } from '../useDebounce';

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');

	const debounced = useDebounce(searchTerm, 500);

	const { isSuccess, data } = useQuery(
		['search movie list', debounced],
		() => getBySearchTerm(debounced),
		{
			select: data => data,
			enabled: !!debounced,
		}
	);

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	return {
		isSuccess,
		handleSearch,
		data,
		searchTerm,
	};
};
