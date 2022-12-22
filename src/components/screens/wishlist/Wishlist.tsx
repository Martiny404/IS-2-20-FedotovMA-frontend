import { Heading } from '@/components/ui/heading/Heading';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';

export const Wishlist: FC = () => {
	return (
		<Meta
			title='Страница с избранными продуктами'
			description='Страница с любимыми или избранными продуктами пользователя'
		>
			<Heading headingLevel='h1'>Избранное</Heading>
		</Meta>
	);
};
