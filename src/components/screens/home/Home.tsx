import { Sidebar } from '@/components/screens/home/Sidebar/Sidebar';
import { ICategory } from '@/types/category.types';
import { Meta } from '@/utils/meta/Meta';
import { FC } from 'react';
import { Reminder } from './reminders/Reminder';
import { SpecialDealsPaper } from './special-deals/paper/SpecialDealsPaper';
import { FreshOffers, IOfferSlide } from './special-deals/slider/FreshOffers';
import styles from './Home.module.scss';
import { IMostOrderedProduct } from '@/types/statistics.types';
import { MostOrderedProducts } from './most-ordered-products/MostOrderedProducts';
import { Heading } from '@/components/ui/heading/Heading';
import { IBrand } from '@/types/brand.types';
import Image from 'next/image';
import { BrandsSlider } from './brands-slider/BrandsSlider';
import { Test } from './t/Test';

export interface IHomeProps {
	offers: IOfferSlide[];
	categories: ICategory[];
	mostOrdered: IMostOrderedProduct[];
	brands: IBrand[];
}

export const Home: FC<IHomeProps> = ({
	offers,
	categories,
	mostOrdered,
	brands,
}) => {
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
							title='Привет, Максим'
							text='Не забывай добавлять почаще товары в избранное, чтобы потом вернуться к их просмотру!'
						/>

						<Reminder
							img='/wish-reminder.png'
							link='/wishlist'
							linkText='Перейти к блогу'
							title='У нас есть блог!'
							text='Иногда ты можешь посещать страницу блога, где наша команда пишет рецензии, проводит тесты и отвечает на вопросы!'
						/>
					</div>
				</div>
			</div>
			<Heading style={{ marginBottom: 20 }} headingLevel='h2'>
				Самые заказываемые!
			</Heading>
			<MostOrderedProducts items={mostOrdered} />
			<Heading style={{ marginBottom: 20 }} headingLevel='h2'>
				Бренды
			</Heading>
			<BrandsSlider brands={brands} />

			<Test />
		</Meta>
	);
};
