export interface Option {
	id: number;
	optionName: string;
	values: OptionValue[];
}

export interface OptionValue {
	id: number;
	value: string;
}
