import { Sidebar } from '@/components/screens/home/Sidebar/Sidebar';
import { ICategory } from '@/types/category.types';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { Reminder } from './reminders/Reminder';
import { SpecialDealsPaper } from './special-deals/paper/SpecialDealsPaper';
import { FreshOffers, IOfferSlide } from './special-deals/slider/FreshOffers';
import styles from './Home.module.scss';

export interface IHomeProps {
	offers: IOfferSlide[];
	categories: ICategory[];
}

export const Home: FC<IHomeProps> = ({ offers, categories }) => {
	return (
		<Meta
			title='Лучшие гаджеты!'
			description='
			В нашем интернет-магазине вы найдете много классных товаров по приятным ценам!'
		>
			<div className={styles.gridMain}>
				<Sidebar items={categories} iconName='DevicesOtherIcon' />

				<div>
					<div className={styles.gridPrimary}>
						<FreshOffers offers={offers} />

						<SpecialDealsPaper />
					</div>
					<div className={styles.gridSecondary}>
						<Reminder
							img='/wish-reminder.png'
							link='/wishlist'
							linkText='Проверить избранное'
							title='Привет Максим'
							text='Не забывай добавлять товары в избранное, чтобы потом вернуться к их просмотру!'
						/>

						<Reminder
							img='/wish-reminder.png'
							link='/wishlist'
							linkText='Проверить избранное'
							title='Привет Максим'
							text='Не забывай добавлять товары в избранное, чтобы потом вернуться к их просмотру!'
						/>
					</div>
				</div>
			</div>
		</Meta>
	);
};
