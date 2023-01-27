import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div
			style={{
				maxWidth: '1170px',
				paddingLeft: 15,
				paddingRight: 15,
				margin: '0 auto',
			}}
		>
			{children}
		</div>
	);
};
