import { Sidebar } from '@/components/screens/home/Sidebar/Sidebar';
import { ICategory } from '@/types/category.types';
import { Meta } from '@/utils/meta/Meta';
import { Grid } from '@mui/material';
import { FC } from 'react';
import { Reminder } from './reminders/Reminder';
import { SpecialDealsPaper } from './special-deals/paper/SpecialDealsPaper';
import { FreshOffers, IOfferSlide } from './special-deals/slider/FreshOffers';

export interface IHomeProps {
	offers: IOfferSlide[];
	categories: ICategory[];
}

export const Home: FC<IHomeProps> = ({ offers, categories }) => {
	return (
		<Meta
			title='Best electronics!'
			description='In our online store you will find a lot of cool products at pleasant prices!'
		>
			<Grid
				container
				spacing={3}
				columns={{ xs: 1, sm: 1, md: 12, lg: 12, xl: 12 }}
			>
				<Grid item md={3.5} sm={1} xs={1} lg={3.5} xl={3.5}>
					<Sidebar items={categories} iconName='DevicesOtherIcon' />
				</Grid>
				<Grid item md={8.5} sm={1} xs={1} lg={8.5} xl={8.5}>
					<Grid
						container
						spacing={2}
						columns={{ xs: 1, sm: 1, md: 3, lg: 3, xl: 3 }}
						alignItems='stretch'
					>
						<Grid item xl={2} lg={2} md={2} sm={1} xs={1}>
							<FreshOffers offers={offers} />
						</Grid>
						<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
							<SpecialDealsPaper />
						</Grid>
						<Grid item xl={3} lg={3} md={3} sm={1} xs={1}>
							<Grid
								container
								spacing={2}
								columns={{ xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
							>
								<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
									<Reminder
										img='/wish-reminder.png'
										link='/wishlist'
										linkText='Проверить избранное'
										title='Привет Максим'
										text='Не забывай добавлять товары в избранное, чтобы потом вернуться к их просмотру!'
									/>
								</Grid>
								<Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
									<Reminder
										img='/wish-reminder.png'
										link='/wishlist'
										linkText='Проверить избранное'
										title='Привет Максим'
										text='Не забывай добавлять товары в избранное, чтобы потом вернуться к их просмотру!'
									/>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Meta>
	);
};
