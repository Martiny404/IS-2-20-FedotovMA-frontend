import { IFilter } from '@/components/screens/catalog/Filters';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const useFilters = () => {
	const { query } = useRouter();

	const queryFilters = query?.filters
		? (JSON.parse(query?.filters.toString()) as IFilter[])
		: [];

	const [filters, setFilters] = useState<IFilter[]>(queryFilters);

	const checked = (value: string, label: string) => {
		const current = filters.find(f => f.key == label);

		if (current) {
			if (current.value.includes(value)) {
				return true;
			}
		}
		return false;
	};

	const onChange = (value: string, label: string) => {
		const copy = [...filters];

		const current = copy.find(f => f.key == label);

		if (current) {
			if (current.value.includes(value)) {
				const currentValue = current.value.filter(v => v != value);
				if (currentValue.length == 0) {
					const currentFilters = copy.filter(f => f.key != label);
					setFilters(currentFilters);
					return;
				} else {
					current.value = currentValue;
					setFilters(copy);
					return;
				}
			}
			current.value = [...current.value, value];
			setFilters(copy);
			return;
		}

		const filter: IFilter = {
			key: label,
			value: [value],
		};
		setFilters([...copy, filter]);
	};

	return {
		onChange,
		checked,
		filters,
	};
};
