import { Option } from './option.types';

export interface ICategory {
	id: number;
	name: string;
	description?: string;
	categoryImgPath?: string;
	options?: Option[];
}
