import { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';

type TypeOut = {
	ref: any;
};

export const useOutsideWithCallback = (callback: () => void): TypeOut => {
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return { ref };
};
