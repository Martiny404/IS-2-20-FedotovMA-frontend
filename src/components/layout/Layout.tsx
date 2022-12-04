import { Container } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='root--main'>
				<Container maxWidth='lg'>{children}</Container>
			</main>
			<Footer />
		</>
	);
};
