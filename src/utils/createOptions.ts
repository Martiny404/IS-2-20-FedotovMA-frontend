import { Option } from '@/types/option.types';

export function createOptions(items: Option[]) {
	return items.map(item => ({
		label: item.optionName,
		value: item.id,
	}));
}
