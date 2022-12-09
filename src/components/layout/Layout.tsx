import { FC, PropsWithChildren } from 'react';
import { Breadcrumbs } from './breadcrumbs/Breadcrumbs';
import { Container } from './container/Container';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<main className='root--main'>
				<Container>
					<Breadcrumbs />
					{children}
				</Container>
			</main>
			<Footer />
		</>
	);
};
