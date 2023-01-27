import { ANIMATION_TIME } from '@/constants/other';
import { useEffect, useState } from 'react';

export const useMount = (opened: boolean) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (opened && !mounted) {
			setMounted(true);
		} else if (!opened && mounted) {
			setTimeout(() => {
				setMounted(false);
			}, ANIMATION_TIME);
		}
	}, [opened]);

	return {
		mounted,
	};
};
