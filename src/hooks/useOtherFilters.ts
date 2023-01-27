import { useRouter } from 'next/router';
import { useState } from 'react';

export const useOtherFilters = (queryKey: string) => {
	const { query } = useRouter();

	const key = query[queryKey]?.toString() || null;

	const initialState = key ? JSON.parse(key) : null;

	const [filter, setFilter] = useState(initialState);

	const checked = (value: any) => (filter === value ? true : false);

	const onChange = (value: any) => {
		setFilter(value);
	};

	const createFilters = () => {
		return JSON.stringify(filter);
	};

	return {
		filter,
		onChange,
		checked,
	};
};
