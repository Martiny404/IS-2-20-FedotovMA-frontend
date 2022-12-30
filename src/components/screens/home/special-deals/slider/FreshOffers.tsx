import SwiperCore, { Navigation } from 'swiper';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OfferSlide } from './OfferSlide';
import styles from './FreshOffers.module.scss';
import { IOffer } from '@/types/offer.types';

SwiperCore.use([Navigation]);

const settings = {
	slidesPerView: 1,
	loop: true,
	id: 'swiper-offers',
	navigation: true,
};

export const FreshOffers: FC<{ offers: IOffer[] }> = ({ offers }) => {
	return (
		<Swiper
			aria-label='offers-slider'
			className={`${styles.slider} my-swiper`}
			{...settings}
		>
			{offers.map(offer => (
				<SwiperSlide key={offer.id}>
					<OfferSlide offer={offer} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};
