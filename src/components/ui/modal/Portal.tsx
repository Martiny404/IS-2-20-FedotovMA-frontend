import { FC, PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const Portal: FC<PropsWithChildren> = ({ children }) => {
	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.removeChild(container);
			document.body.style.overflow = 'visible';
		};
	}, []);

	return ReactDOM.createPortal(children, container);
};
