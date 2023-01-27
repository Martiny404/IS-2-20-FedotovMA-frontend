import { FC, PropsWithChildren } from 'react';
import { Container } from './container/Container';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='root--main'>
				<Container>{children}</Container>
			</main>
			<Footer />
		</>
	);
};
